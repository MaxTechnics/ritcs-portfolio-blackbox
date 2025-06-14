export type Traject = 'AVT' | 'Realisatie' | 'Productie';

export interface PortfolioStudent {
    first_name: string;
    last_name: string;
    traject: Traject;
    website?: string;
}

export const students: { [name: string]: PortfolioStudent } = {
    'firstlast': {
        first_name: 'First',
        last_name: 'Last',
        traject: 'AVT'
    },
    'thiebewouters': {
        first_name: 'Thiebe',
        last_name: 'Wouters',
        traject: 'Realisatie',
        website: 'https://thiebewouters.myportfolio.com/'
    },
    'thanitsornverschueren': {
        first_name: 'Thanit',
        last_name: 'Verschueren',
        traject: 'AVT',
        website: 'https://thanitsornversch.myportfolio.com/'
    },
    'stevenvantichelen': {
        first_name: 'Steven',
        last_name: 'Van Tichelen',
        traject: 'AVT',
        website: 'https://stevenvantichelen.my.canva.site/'
    },
    'sazanloomans': {
        first_name: 'Sazan',
        last_name: 'Loomans',
        traject: 'Productie'
    },
    'robincooremans': {
        first_name: 'Robin',
        last_name: 'Cooremans',
        traject: 'AVT',
        website: 'https://robincooremans.myportfolio.com/work'
    },
    'pimvergeest': {
        first_name: 'Pim',
        last_name: 'Vergeest',
        traject: 'Realisatie',
        website: 'https://www.pimvergeest.nl/'
    },
    'mozalbak': {
        first_name: 'Mo',
        last_name: 'Zalbak',
        traject: 'Realisatie',
        website: 'https://mohammadzalbak.my.canva.site/'
    },
    'owenvandoorslaer': {
        first_name: 'Owen',
        last_name: 'Van Doorslaer',
        traject: 'AVT',
        website: 'https://owenthecreator.com/'
    },
    'mirademulder': {
        first_name: 'Mira',
        last_name: 'De Mulder',
        traject: 'Realisatie',
        website: 'https://mirademulder.myportfolio.com/work'
    },
    'margauxdecleyre': {
        first_name: 'Margaux',
        last_name: 'Decleyre',
        traject: 'Realisatie',
        website: 'https://margauxsmontage.my.canva.site/portfolio'
    },
    'martvandenheuvel': {
        first_name: 'Mart',
        last_name: 'Van Den Heuvel',
        traject: 'Realisatie',
        website: 'http://cine-mart.com/'
    },
    'marievermeulen': {
        first_name: 'Marie',
        last_name: 'Vermeulen',
        traject: 'Realisatie',
        website: 'https://marievermeulen.my.canva.site/'
    },
    'maartenaerssens': {
        first_name: 'Maarten',
        last_name: 'Aerssens',
        traject: 'AVT',
        website: 'https://maartenaerssens.be/'
    },
    'linavannerum': {
        first_name: 'Lina',
        last_name: 'Vannerum',
        traject: 'Realisatie',
        website: 'https://linavannerum18.wixsite.com/vannlina'
    },
    'kianikhatrichetri': {
        first_name: 'Kiani',
        last_name: 'Khatri Chetri',
        traject: 'Realisatie'
    },
    'julescnudde': {
        first_name: 'Jules',
        last_name: 'Cnudde',
        traject: 'Realisatie',
        website: 'https://www.julescnudde.com/'
    },
    'lukasvleugels': {
        first_name: 'Lukas',
        last_name: 'Vleugels',
        traject: 'Realisatie',
        website: 'https://lukas-vleugels.my.canva.site/'
    },
    'khanyisilevanderheide': {
        first_name: 'Khanyisile',
        last_name: 'Van Der Heide',
        traject: 'Realisatie',
        website: 'https://khanyisilevanderheide.my.canva.site/khanyisile-van-der-heide'
    },
    'femkebeeckman': {
        first_name: 'Femke',
        last_name: 'Beeckman',
        traject: 'AVT',
        website: 'https://femkebeeckman.be/'
    },
    'dallaechin': {
        first_name: 'Dallae',
        last_name: 'Chin',
        traject: 'Realisatie',
        website: 'https://dallaechin.tumblr.com/'
    },
    'casderidder': {
        first_name: 'Cas',
        last_name: 'De Ridder',
        traject: 'AVT',
        website: 'https://casderidder.myportfolio.com/work'
    },
    'brentdewin': {
        first_name: 'Brent',
        last_name: 'De Win',
        traject: 'AVT',
        website: 'https://brentdewin.my.canva.site/'
    },
    'alexandramees': {
        first_name: 'Alexandra',
        last_name: 'Mees',
        traject: 'Productie',
        website: 'https://alexandramees1dcc.myportfolio.com/home'
    },
    'aimyvandenbemden': {
        first_name: 'Aimy',
        last_name: 'Vanden Bemden',
        traject: 'Productie',
        website: 'https://portfolio-aimyvandenbemden.my.canva.site/'
    },
    'warddeleersnyder': {
        first_name: 'Ward',
        last_name: 'Deleersnyder',
        traject: 'AVT',
        website: 'https://warddelestudent.wixsite.com/warddeleersnyder'
    },
    'lukakeunen': {
        first_name: 'Luka',
        last_name: 'Keunen',
        traject: 'Realisatie',
        website: 'https://lukanie.my.canva.site/portfolio'
    },
    'driesvandormael': {
        first_name: 'Dries',
        last_name: 'Vandormael',
        traject: 'AVT',
        website: 'https://driesvandormael.my.canva.site/'
    },
    'wouttemmerman': {
        first_name: 'Wout',
        last_name: 'Temmerman',
        traject: 'AVT',
        website: 'https://temmermanwout.my.canva.site/temmerman-wout'
    },
    'brentcauberghs': {
        first_name: 'Brent',
        last_name: 'Cauberghs',
        traject: 'Realisatie',
        website: 'https://brentcauberghs.my.canva.site/'
    },
    'nansialkhateeb': {
        first_name: 'Nansi',
        last_name: 'Alkhateeb',
        traject: 'Realisatie'
    },
    'opheliadelhaye': {
        first_name: 'Ophelia',
        last_name: 'Delhaye',
        traject: 'Realisatie',
        website: 'https://opheliadelhaye.wixsite.com/my-site-1'
    },
    'ferremeyhi': {
        first_name: 'Ferre',
        last_name: 'Meyhi',
        traject: 'Realisatie',
        website: 'https://ferremeyhi.my.canva.site/portfolio2025'
    },
    'tuurvangrimde': {
        first_name: 'Tuur',
        last_name: 'Vangrimde',
        traject: 'Realisatie',
        website: 'https://tuurvangrimde.my.canva.site/'
    },
    'jonaschepens': {
        first_name: 'Jonas',
        last_name: 'Schepens',
        traject: 'AVT',
        website: 'https://jona-schepens.webnode.be/portfolio/'
    },
    'maximcoppieters': {
        first_name: 'Maxim',
        last_name: 'Coppieters',
        traject: 'AVT',
        website: 'maxim.infonet.media'
    }
}
