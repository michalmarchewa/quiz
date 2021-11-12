interface navigationItem {
  title: string;
  linkTo: string;
}

export const navigationItems: navigationItem[] = [
  { title: 'Start', linkTo: '/' },
  { title: 'Quizy', linkTo: '/quizzes' },
  { title: 'Stwórz Quiz', linkTo: '/createquiz' },
];
