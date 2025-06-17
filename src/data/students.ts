export type Traject = 'AVT' | 'Realisatie' | 'Productie' | 'Lost';

export interface PortfolioStudent {
    id: string;
    first_name: string;
    last_name: string;
    tagline?: string;
    traject: Traject;
    website?: string;
}

export const students: { [name: string]: PortfolioStudent } = {
    'thiebewouters': {
        id: 'thiebewouters',
        first_name: 'Thiebe',
        last_name: 'Wouters',
        traject: 'Realisatie',
        website: 'https://thiebewouters.myportfolio.com/'
    },
    'thanitsornverschueren': {
        id: 'thanitsornverschueren',
        first_name: 'Thanit',
        last_name: 'Verschueren',
        traject: 'AVT',
        website: 'https://thanitsornversch.myportfolio.com/'
    },
    'stevenvantichelen': {
        id: 'stevenvantichelen',
        first_name: 'Steven',
        last_name: 'Van Tichelen',
        traject: 'AVT',
        website: 'https://stevenvantichelen.my.canva.site/'
    },
    'sazanloomans': {
        id: 'sazanloomans',
        first_name: 'Sazan',
        last_name: 'Loomans',
        traject: 'Productie'
    },
    'robincooremans': {
        id: 'robincooremans',
        first_name: 'Robin',
        last_name: 'Cooremans',
        traject: 'AVT',
        website: 'https://robincooremans.myportfolio.com/work'
    },
    'pimvergeest': {
        id: 'pimvergeest',
        first_name: 'Pim',
        last_name: 'Vergeest',
        traject: 'Realisatie',
        website: 'https://www.pimvergeest.nl/'
    },
    'mozalbak': {
        id: 'mozalbak',
        first_name: 'Mo',
        last_name: 'Zalbak',
        traject: 'Realisatie',
        website: 'https://mohammadzalbak.my.canva.site/'
    },
    'owenvandoorslaer': {
        id: 'owenvandoorslaer',
        first_name: 'Owen',
        last_name: 'Van Doorslaer',
        traject: 'AVT',
        website: 'https://owenthecreator.com/'
    },
    'mirademulder': {
        id: 'mirademulder',
        first_name: 'Mira',
        last_name: 'De Mulder',
        traject: 'Realisatie',
        website: 'https://mirademulder.myportfolio.com/work'
    },
    'margauxdecleyre': {
        id: 'margauxdecleyre',
        first_name: 'Margaux',
        last_name: 'Decleyre',
        traject: 'Realisatie',
        website: 'https://margauxsmontage.my.canva.site/portfolio'
    },
    'martvandenheuvel': {
        id: 'martvandenheuvel',
        first_name: 'Mart',
        last_name: 'Van Den Heuvel',
        traject: 'Realisatie',
        website: 'http://cine-mart.com/'
    },
    'marievermeulen': {
        id: 'marievermeulen',
        first_name: 'Marie',
        last_name: 'Vermeulen',
        traject: 'Realisatie',
        website: 'https://marievermeulen.my.canva.site/'
    },
    'maartenaerssens': {
        id: 'maartenaerssens',
        first_name: 'Maarten',
        last_name: 'Aerssens',
        traject: 'AVT',
        website: 'https://maartenaerssens.be/'
    },
    'linavannerum': {
        id: 'linavannerum',
        first_name: 'Lina',
        last_name: 'Vannerum',
        traject: 'Realisatie',
        website: 'https://linavannerum18.wixsite.com/vannlina'
    },
    'kianikhatrichetri': {
        id: 'kianikhatrichetri',
        first_name: 'Kiani',
        last_name: 'Khatri Chetri',
        traject: 'Realisatie'
    },
    'julescnudde': {
        id: 'julescnudde',
        first_name: 'Jules',
        last_name: 'Cnudde',
        traject: 'Realisatie',
        website: 'https://www.julescnudde.com/'
    },
    'lukasvleugels': {
        id: 'lukasvleugels',
        first_name: 'Lukas',
        last_name: 'Vleugels',
        traject: 'Realisatie',
        website: 'https://lukas-vleugels.my.canva.site/'
    },
    'khanyisilevanderheide': {
        id: 'khanyisilevanderheide',
        first_name: 'Khanyisile',
        last_name: 'Van Der Heide',
        traject: 'Realisatie',
        website: 'https://khanyisilevanderheide.my.canva.site/khanyisile-van-der-heide'
    },
    'femkebeeckman': {
        id: 'femkebeeckman',
        first_name: 'Femke',
        last_name: 'Beeckman',
        traject: 'AVT',
        website: 'https://femkebeeckman.be/'
    },
    'dallaechin': {
        id: 'dallaechin',
        first_name: 'Dallae',
        last_name: 'Chin',
        traject: 'Realisatie',
        website: 'https://dallaechin.tumblr.com/'
    },
    'casderidder': {
        id: 'casderidder',
        first_name: 'Cas',
        last_name: 'De Ridder',
        traject: 'AVT',
        website: 'https://casderidder.myportfolio.com/work'
    },
    'brentdewin': {
        id: 'brentdewin',
        first_name: 'Brent',
        last_name: 'De Win',
        traject: 'AVT',
        website: 'https://brentdewin.my.canva.site/'
    },
    'alexandramees': {
        id: 'alexandramees',
        first_name: 'Alexandra',
        last_name: 'Mees',
        traject: 'Productie',
        website: 'https://alexandramees1dcc.myportfolio.com/home'
    },
    'aimyvandenbemden': {
        id: 'aimyvandenbemden',
        first_name: 'Aimy',
        last_name: 'Vanden Bemden',
        traject: 'Productie',
        website: 'https://portfolio-aimyvandenbemden.my.canva.site/'
    },
    'warddeleersnyder': {
        id: 'warddeleersnyder',
        first_name: 'Ward',
        last_name: 'Deleersnyder',
        traject: 'AVT',
        website: 'https://warddelestudent.wixsite.com/warddeleersnyder'
    },
    'lukakeunen': {
        id: 'lukakeunen',
        first_name: 'Luka',
        last_name: 'Keunen',
        traject: 'Realisatie',
        website: 'https://lukanie.my.canva.site/portfolio'
    },
    'driesvandormael': {
        id: 'driesvandormael',
        first_name: 'Dries',
        last_name: 'Vandormael',
        traject: 'AVT',
        website: 'https://driesvandormael.my.canva.site/'
    },
    'wouttemmerman': {
        id: 'wouttemmerman',
        first_name: 'Wout',
        last_name: 'Temmerman',
        traject: 'AVT',
        website: 'https://temmermanwout.my.canva.site/temmerman-wout'
    },
    'brentcauberghs': {
        id: 'brentcauberghs',
        first_name: 'Brent',
        last_name: 'Cauberghs',
        traject: 'Realisatie',
        website: 'https://brentcauberghs.my.canva.site/'
    },
    'nansialkhateeb': {
        id: 'nansialkhateeb',
        first_name: 'Nansi',
        last_name: 'Alkhateeb',
        traject: 'Realisatie'
    },
    'opheliadelhaye': {
        id: 'opheliadelhaye',
        first_name: 'Ophelia',
        last_name: 'Delhaye',
        traject: 'Realisatie',
        website: 'https://opheliadelhaye.wixsite.com/my-site-1'
    },
    'ferremeyhi': {
        id: 'ferremeyhi',
        first_name: 'Ferre',
        last_name: 'Meyhi',
        traject: 'Productie',
        website: 'https://ferremeyhi.my.canva.site/portfolio2025'
    },
    'tuurvangrimde': {
        id: 'tuurvangrimde',
        first_name: 'Tuur',
        last_name: 'Vangrimde',
        traject: 'Realisatie',
        website: 'https://tuurvangrimde.my.canva.site/'
    },
    'jonaschepens': {
        id: 'jonaschepens',
        first_name: 'Jonas',
        last_name: 'Schepens',
        traject: 'AVT',
        website: 'https://jona-schepens.webnode.be/portfolio/'
    },
    'maximcoppieters': {
        id: 'maximcoppieters',
        first_name: 'Maxim',
        last_name: 'Coppieters',
        tagline: 'Professional nerd :)',
        traject: 'AVT',
        website: 'https://maxim.infonet.media'
    },
    'thibaultschroeven': {
        id: 'thibaultschroeven',
        first_name: 'Thibault',
        last_name: 'Schroeven',
        traject: 'Lost'
    },
    'nelgevaerts': {
        id: 'nelgevaerts',
        first_name: 'Nel',
        last_name: 'Gevaerts',
        traject: 'Lost'
    },
    'nemosauzeat': {
        id: 'nemosauzeat',
        first_name: 'Nemo',
        last_name: 'Sauzeat',
        traject: 'Lost'
    },
    'maxjaamann': {
        id: 'maxjaamann',
        first_name: 'Max',
        last_name: 'Jaamann',
        traject: 'Lost'
    },
    'amelieschreurs': {
        id: 'amelieschreurs',
        first_name: 'Amelie',
        last_name: 'Schreurs',
        traject: 'Lost'
    },
    'bapkekauwenbergs': {
        id: 'bapkekauwenbergs',
        first_name: 'Bapke',
        last_name: 'Kauwenbergs',
        traject: 'Lost'
    },
    'seppevijverman': {
        id: 'seppevijverman',
        first_name: 'Seppe',
        last_name: 'Vijverman',
        traject: 'Lost'
    },
    'lisekerckx': {
        id: 'lisekerckx',
        first_name: 'Lise',
        last_name: 'Kerckx',
        traject: 'Lost'
    },
    'lukasjoosten': {
        id: 'lukasjoosten',
        first_name: 'Lukas',
        last_name: 'Joosten',
        traject: 'Lost'
    },
    'abdoulienije': {
        id: 'abdoulienije',
        first_name: 'Abdoulie',
        last_name: 'Nije',
        traject: 'Lost'
    },
    'raoullangermans': {
        id: 'raoullangermans',
        first_name: 'Raoul',
        last_name: 'Langermans',
        traject: 'Lost' // TODO verify
    }
};

export type StudentId = 'thiebewouters'
    | 'thanitsornverschueren'
    | 'stevenvantichelen'
    | 'sazanloomans'
    | 'robincooremans'
    | 'pimvergeest'
    | 'mozalbak'
    | 'owenvandoorslaer'
    | 'mirademulder'
    | 'margauxdecleyre'
    | 'martvandenheuvel'
    | 'marievermeulen'
    | 'maartenaerssens'
    | 'linavannerum'
    | 'kianikhatrichetri'
    | 'julescnudde'
    | 'lukasvleugels'
    | 'khanyisilevanderheide'
    | 'femkebeeckman'
    | 'dallaechin'
    | 'casderidder'
    | 'brentdewin'
    | 'alexandramees'
    | 'aimyvandenbemden'
    | 'warddeleersnyder'
    | 'lukakeunen'
    | 'driesvandormael'
    | 'wouttemmerman'
    | 'brentcauberghs'
    | 'nansialkhateeb'
    | 'opheliadelhaye'
    | 'ferremeyhi'
    | 'tuurvangrimde'
    | 'jonaschepens'
    | 'maximcoppieters'
    | 'thibaultschroeven'
    | 'nelgevaerts'
    | 'nemosauzeat'
    | 'maxjaamann'
    | 'amelieschreurs'
    | 'bapkekauwenbergs'
    | 'seppevijverman'
    | 'lisekerckx'
    | 'lukasjoosten'
    | 'abdoulienije'
    | 'raoullangermans';

