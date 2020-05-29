import { Lesson } from './lesson';

export const LESSONS: Lesson[] = [
  {
    title: 'Programming',
    teacher: { surname: 'Surname1', name: 'Name1', patronymic: 'Patronymic1' },
    position: [0, 1, 4],
    type: 'Lection',
    audience: 118,
    building: 2,
    week: 22,
    day: 0,
  },
  {
    title: 'Niggashit long name',
    teacher: { surname: 'Surname2', name: 'Name2', patronymic: 'Patronymic2' },
    position: [1, 3, 3, 3],
    type: 'Practice',
    audience: 34,
    building: 2,
    week: 22,
    day: 0,
  },
];
