export interface RepetitionInput {
    previousRepetition: number;
    wasCorrect: boolean;
}

export interface RepetitionResult {
    repetitionIndex: number;
    interval: number;
    nextReviewAt: string;
}

const intervals = [1, 2, 4, 7, 15, 30, 60, 120];

export function binarySpacedRepetition({ previousRepetition, wasCorrect }: RepetitionInput): RepetitionResult {
    const repetitionIndex = wasCorrect
        ? Math.min(previousRepetition + 1, intervals.length - 1)
        : 0;

    const interval = intervals[repetitionIndex];

    const nextReviewAt = new Date();
    nextReviewAt.setDate(nextReviewAt.getDate() + interval);

    return {
        repetitionIndex,
        interval,
        nextReviewAt: nextReviewAt.toISOString()
    };
}
