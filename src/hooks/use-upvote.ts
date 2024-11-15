import { useState, useEffect } from 'react';

export function useUpvote(resourceId: string) {
  const [votes, setVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    // Load votes from localStorage
    const storedVotes = localStorage.getItem(`votes-${resourceId}`);
    const userVoted = localStorage.getItem(`voted-${resourceId}`);
    
    if (storedVotes) {
      setVotes(parseInt(storedVotes, 10));
    }
    
    if (userVoted) {
      setHasVoted(true);
    }
  }, [resourceId]);

  const handleVote = () => {
    if (!hasVoted) {
      const newVotes = votes + 1;
      setVotes(newVotes);
      setHasVoted(true);
      
      // Save to localStorage
      localStorage.setItem(`votes-${resourceId}`, newVotes.toString());
      localStorage.setItem(`voted-${resourceId}`, 'true');
    }
  };

  return { votes, hasVoted, handleVote };
}