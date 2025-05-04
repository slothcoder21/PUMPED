import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { fitnessLevel, goal, duration, equipment, focusArea, limitations } = body;
    
    if (!fitnessLevel || !goal || !duration || !equipment || !focusArea) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    // OpenAI Prompt
    const prompt = `
      Create a detailed ${duration}-minute workout plan for a ${fitnessLevel} level individual focusing on ${goal} for the ${focusArea.replace(
      '_',
      ' '
    )}. 
      
      The person has access to ${equipment === 'none' ? 'no equipment (bodyweight only)' : equipment} equipment.
      ${limitations ? `They have the following limitations or injuries: ${limitations}.` : ''}
      
      Format the response as a JSON object with the following structure:
      {
        "name": "Name of the workout",
        "description": "Brief description of the workout",
        "warmup": [
          {"name": "Warm-up exercise name", "duration": "duration in minutes/seconds"}
        ],
        "exercises": [
          {
            "name": "Exercise name",
            "sets": number of sets,
            "reps": number of reps,
            "rest": "rest time between sets",
            "instruction": "brief form guidance"
          }
        ],
        "cooldown": [
          {"name": "Cool-down exercise name", "duration": "duration in minutes/seconds"}
        ]
      }
      
      Make sure the exercises are appropriate for the fitness level and any limitations mentioned.
    `;

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a certified personal trainer and exercise specialist.' },
        { role: 'user', content: prompt },
      ],
      model: 'gpt-3.5-turbo',
      response_format: { type: 'json_object' },
    });

    // Parse the response
    const response = completion.choices[0].message.content;
    const workoutPlan = JSON.parse(response);

    return NextResponse.json(workoutPlan);
  } catch (error) {
    console.error('Error generating workout:', error);
    return NextResponse.json(
      { error: 'Failed to generate workout plan' },
      { status: 500 }
    );
  }
} 