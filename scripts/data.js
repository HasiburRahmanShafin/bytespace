/* ==========================================================================
   ByteSpace Platform Data
   Courses, Categories, Instructors, and Testimonials
   ========================================================================== */

export const coursesData = [
  {
    id: 'course-1',
    title: 'Full-Stack Web Development Bootcamp: Zero to Hero',
    category: 'Development',
    categoryTag: 'Web Development',
    level: 'Beginner to Pro',
    image: 'assets/images/course_webdev.jpg',
    rating: 4.9,
    reviewsCount: '2.4k',
    duration: '48 Hours',
    lessonsCount: 72,
    instructor: {
      name: 'Alex Rivers',
      role: 'Senior Tech Lead @ Google Ex-Alum',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
    },
    price: 49.99,
    originalPrice: 129.99,
    badge: 'Bestseller'
  },
  {
    id: 'course-2',
    title: 'Complete Figma Masterclass: Design Systems & UX Research',
    category: 'UI/UX Design',
    categoryTag: 'UI/UX Design',
    level: 'All Levels',
    image: 'assets/images/course_uiux.jpg',
    rating: 4.9,
    reviewsCount: '1.8k',
    duration: '32 Hours',
    lessonsCount: 54,
    instructor: {
      name: 'Elena Rostova',
      role: 'Staff Product Designer',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80'
    },
    price: 39.99,
    originalPrice: 99.99,
    badge: 'Popular'
  },
  {
    id: 'course-3',
    title: 'Machine Learning & AI Engineering with Python',
    category: 'AI & Data Science',
    categoryTag: 'AI & Machine Learning',
    level: 'Intermediate',
    image: 'assets/images/course_ai_python.jpg',
    rating: 4.9,
    reviewsCount: '3.1k',
    duration: '56 Hours',
    lessonsCount: 96,
    instructor: {
      name: 'Dr. Marcus Vance',
      role: 'AI Research Scientist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80'
    },
    price: 59.99,
    originalPrice: 149.99,
    badge: 'Hot'
  },
  {
    id: 'course-4',
    title: 'AWS Certified Solutions Architect & DevOps Pipeline',
    category: 'Cloud & DevOps',
    categoryTag: 'Cloud & DevOps',
    level: 'Advanced',
    image: 'assets/images/course_cloud.jpg',
    rating: 4.8,
    reviewsCount: '1.2k',
    duration: '38 Hours',
    lessonsCount: 60,
    instructor: {
      name: 'David Chen',
      role: 'Principal Cloud Architect',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80'
    },
    price: 44.99,
    originalPrice: 119.99,
    badge: 'Certified'
  },
  {
    id: 'course-5',
    title: 'Cross-Platform Mobile App Development with React Native',
    category: 'Development',
    categoryTag: 'Mobile App',
    level: 'Intermediate',
    image: 'assets/images/course_mobile.jpg',
    rating: 4.8,
    reviewsCount: '1.5k',
    duration: '34 Hours',
    lessonsCount: 52,
    instructor: {
      name: 'Sophia Patel',
      role: 'Lead Mobile Engineer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80'
    },
    price: 42.99,
    originalPrice: 109.99,
    badge: 'Updated'
  },
  {
    id: 'course-6',
    title: 'Growth Marketing & Data-Driven Product Strategy',
    category: 'Business & Marketing',
    categoryTag: 'Growth Marketing',
    level: 'All Levels',
    image: 'assets/images/course_webdev.jpg',
    rating: 4.9,
    reviewsCount: '980',
    duration: '24 Hours',
    lessonsCount: 38,
    instructor: {
      name: 'James Wilson',
      role: 'VP of Growth & Strategy',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80'
    },
    price: 34.99,
    originalPrice: 89.99,
    badge: 'High Demand'
  }
];

export const categoriesData = [
  {
    id: 'cat-1',
    title: 'Development',
    coursesCount: '140+ Courses',
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`
  },
  {
    id: 'cat-2',
    title: 'UI/UX Design',
    coursesCount: '85+ Courses',
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>`
  },
  {
    id: 'cat-3',
    title: 'Data & AI',
    coursesCount: '95+ Courses',
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line><path d="M9 10l2 2 4-4"></path></svg>`
  },
  {
    id: 'cat-4',
    title: 'Cloud & DevOps',
    coursesCount: '52+ Courses',
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`
  },
  {
    id: 'cat-5',
    title: 'Cyber Security',
    coursesCount: '38+ Courses',
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`
  },
  {
    id: 'cat-6',
    title: 'Business & Tech',
    coursesCount: '64+ Courses',
    icon: `<svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`
  }
];

export const testimonialsData = [
  {
    id: 'test-1',
    name: 'Marcus Sterling',
    role: 'Frontend Engineer at Spotify',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
    quote: 'ByteSpace completely transformed my learning curve. The projects are actual production-grade applications that helped me stand out and land a dream engineering role within 4 months.',
    stars: 5
  },
  {
    id: 'test-2',
    name: 'Jessica Lin',
    role: 'Product Designer at Figma',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80',
    quote: 'The design systems and UX architecture masterclasses are second to none. Elena broke down complex token hierarchies in a way that made immediate sense. Highly recommended!',
    stars: 5
  },
  {
    id: 'test-3',
    name: 'David Adebayo',
    role: 'Cloud Architect at AWS',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80',
    quote: 'From zero cloud knowledge to passing my AWS solutions certification on the first attempt. The interactive labs and mentor feedback were game-changers for my career trajectory.',
    stars: 5
  }
];
