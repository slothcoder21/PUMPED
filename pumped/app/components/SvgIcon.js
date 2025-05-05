'use client';

import { useEffect, useState } from 'react';

/**
 * A component to load SVG files from the public directory
 * 
 * @param {string} name - The name of the SVG file without extension (e.g., 'clock' for '/svgs/clock.svg')
 * @param {string} className - CSS class names to apply to the container
 */
export default function SvgIcon({ name, className = '', ...props }) {
  // State to store the SVG content as a string
  const [svgContent, setSvgContent] = useState('');
  // State to track loading status
  const [isLoading, setIsLoading] = useState(true);
  // State to handle any errors during loading
  const [error, setError] = useState(null);

  // Filter out React-specific props to avoid warnings when using dangerouslySetInnerHTML
  const safeProps = { ...props };
  delete safeProps.children; // Remove children prop
  Object.keys(safeProps).forEach(key => {
    // Remove event handlers and ref props
    if (key.startsWith('on') || key === 'ref') {
      delete safeProps[key];
    }
  });

  useEffect(() => {
    // Validate that a name was provided
    if (!name) {
      setError('No SVG name provided');
      setIsLoading(false);
      return;
    }

    // Reset state when SVG name changes to prevent showing previous SVG
    setSvgContent('');
    setError(null);
    setIsLoading(true);
    
    // Create an abort controller to cancel the fetch if component unmounts
    const controller = new AbortController();
    const signal = controller.signal;
    
    // Fetch the SVG file from the public directory
    fetch(`/svgs/${name}.svg`, { signal })
      .then(response => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error(`Failed to load SVG: ${response.status}`);
        }
        return response.text();
      })
      .then(text => {
        // Verify that SVG content is not empty
        if (text && text.trim() !== '') {
          setSvgContent(text);
        } else {
          setError('Empty SVG content');
        }
      })
      .catch(err => {
        // Handle errors but ignore abort errors (which happen on cleanup)
        if (err.name !== 'AbortError') {
          console.error(`Error loading SVG "${name}":`, err);
          setError(err.message);
        }
      })
      .finally(() => {
        // Set loading to false regardless of success or failure
        setIsLoading(false);
      });

    // Cleanup function to abort fetch if component unmounts
    return () => {
      controller.abort();
    };
  }, [name]); // Re-run effect when SVG name changes

  // Show empty placeholder when loading
  if (isLoading) {
    return <div className={`inline-block ${className}`} style={{ width: '1em', height: '1em' }} />;
  }
  
  // Show empty placeholder when there's an error or no content
  if (error || !svgContent) {
    return <div className={`inline-block ${className}`} style={{ width: '1em', height: '1em' }} />;
  }

  // Render the SVG content using dangerouslySetInnerHTML
  // This is safe because we control the SVG source (from our public directory)
  return <div className={className} dangerouslySetInnerHTML={{ __html: svgContent }} />;
} 