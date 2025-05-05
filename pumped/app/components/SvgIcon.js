'use client';

import { useEffect, useState } from 'react';

/**
 * A component to load SVG files from the public directory
 * 
 * @param {string} name - The name of the SVG file without extension (e.g., 'clock' for '/svgs/clock.svg')
 * @param {string} className - CSS class names to apply to the container
 */
export default function SvgIcon({ name, className = '', ...props }) {
  const [svgContent, setSvgContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Remove React-specific props
  const safeProps = { ...props };
  delete safeProps.children;
  Object.keys(safeProps).forEach(key => {
    if (key.startsWith('on') || key === 'ref') {
      delete safeProps[key];
    }
  });

  useEffect(() => {
    if (!name) {
      setError('No SVG name provided');
      setIsLoading(false);
      return;
    }

    // Reset state when SVG name changes
    setSvgContent('');
    setError(null);
    setIsLoading(true);
    
    const controller = new AbortController();
    const signal = controller.signal;
    
    fetch(`/svgs/${name}.svg`, { signal })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load SVG: ${response.status}`);
        }
        return response.text();
      })
      .then(text => {
        if (text && text.trim() !== '') {
          setSvgContent(text);
        } else {
          setError('Empty SVG content');
        }
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          console.error(`Error loading SVG "${name}":`, err);
          setError(err.message);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [name]);

  // Loading placeholder
  if (isLoading) {
    return <div className={`inline-block ${className}`} style={{ width: '1em', height: '1em' }} />;
  }
  
  // Error placeholder
  if (error || !svgContent) {
    return <div className={`inline-block ${className}`} style={{ width: '1em', height: '1em' }} />;
  }

  // Render the SVG without applying props directly to it
  return <div className={className} dangerouslySetInnerHTML={{ __html: svgContent }} />;
} 