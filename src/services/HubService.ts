import { Submission } from '../types/Hub';

export const calculateGrade = (rawScore: number, totalPossible: number): number => {
  return (rawScore / totalPossible) * 100;
};

export const formatResultsForPaperwork = (submissions: Submission[]) => {
  return submissions.map(s => ({
    projectId: s.projectId,
    grade: s.grade || 0,
    status: s.status
  }));
};
