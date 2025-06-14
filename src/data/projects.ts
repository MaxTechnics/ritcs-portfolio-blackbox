type PortfolioTag = 'AVT' | 'Productie' | 'Realisatie';
type Credit = {
    personID: string;
    function: string;
}

interface PortfolioProject {
    title: string;
    description: string;
    image: string;
    tags: PortfolioTag[];
    personal: boolean;
    credits: Credit[];
}

export const projects: PortfolioProject[] = [
    {
        title: 'Testproject',
        description: 'Dit is een testproject om de portfolio functionaliteit te demonstreren.',
        image: '',
        tags: ['AVT', 'Productie'],
        personal: false,
        credits: [
            { personID: 'firstlast', function: 'Projectleider' },
            { personID: 'firstlast2', function: 'Ontwerper' }
        ]
    }
]
