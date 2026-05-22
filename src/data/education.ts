export interface EducationEntry {
    id: string;
    degree: string;
    institution: string;
    location: string;
    period?: string;
    gpa: string;
    focus: string;
    highlights: string[];
    coursework: string[];
}

export const education: EducationEntry[] = [
    {
        id: 'ms-gwu',
        degree: 'Master of Science in Computer Science',
        institution: 'The George Washington University',
        location: 'Washington, DC',
        period: 'Aug 2023 - May 2025',
        gpa: '3.84 / 4.00',
        focus: 'Machine Learning and Quantum Computing',
        highlights: [
            'Guest lecturer for Introduction to Quantum Computing and teaching assistant across software engineering, programming, and software development courses.',
            'Graduate work centered on advanced machine learning, deep learning, AI, and quantum algorithms with a clear research-to-systems focus.',
        ],
        coursework: ['Advanced Machine Learning', 'Deep Learning', 'Quantum Algorithms', 'Artificial Intelligence'],
    },
    {
        id: 'btech-niit',
        degree: 'Bachelor of Technology in Computer Science and Engineering',
        institution: 'NIIT University',
        location: 'Neemrana, Rajasthan',
        gpa: '7.7 / 10.0',
        focus: 'Network and Cybersecurity',
        highlights: [
            'Built a strong foundation in software engineering, algorithms, and systems thinking with an early research focus on network and cybersecurity problems.',
            'Undergraduate coursework emphasized security, communication systems, and practical software design rather than narrow specialization.',
        ],
        coursework: ['Cybersecurity', 'Algorithms', 'Data Structures', 'Software Engineering'],
    },
];