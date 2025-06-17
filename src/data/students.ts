import THIEBE from '@/assets/studentimg/thiebe.png';
import THANIT from '@/assets/studentimg/thanit.png';
import STEVEN from '@/assets/studentimg/steven.png';
import SAZAN from '@/assets/studentimg/sazan.png';
import ROBIN from '@/assets/studentimg/robin.png';
import PIM from '@/assets/studentimg/pim.png';
import MO from '@/assets/studentimg/mo.png';
import OWEN from '@/assets/studentimg/owen.png';
import MIRA from '@/assets/studentimg/mira.png';
import MARGAUX from '@/assets/studentimg/margaux.png';
import MART from '@/assets/studentimg/mart.png';
import MARIE from '@/assets/studentimg/marie.png';
import MAARTEN from '@/assets/studentimg/maarten.png';
import LINA from '@/assets/studentimg/lina.png';
import KIANI from '@/assets/studentimg/kiani.png';
import JULES from '@/assets/studentimg/jules.png';
import LUKAS from '@/assets/studentimg/lukas.png';
import KHANYISILE from '@/assets/studentimg/khanyisile.png';
import FEMKE from '@/assets/studentimg/femke.png';
// import DALLAE from '@/assets/studentimg/dallae.png';
import CAS from '@/assets/studentimg/cas.png';
import BRENTDW from '@/assets/studentimg/brentdw.png';
import ALEXANDRA from '@/assets/studentimg/alexandra.png';
import AIMY from '@/assets/studentimg/aimy.png';
import WARD from '@/assets/studentimg/ward.png';
import LUKA from '@/assets/studentimg/luka.png';
import DRIES from '@/assets/studentimg/dries.png';
import WOUT from '@/assets/studentimg/wout.png';
import BRENTC from '@/assets/studentimg/brentc.png';
// import NANSI from '@/assets/studentimg/nansi.png';
import OPHELIA from '@/assets/studentimg/ophelia.png';
import FERRE from '@/assets/studentimg/ferre.png';
import TUUR from '@/assets/studentimg/tuur.png';
// import JONA from '@/assets/studentimg/jona.png';
import MAXIM from '@/assets/studentimg/maxim.png';

export type Traject = 'AVT' | 'Realisatie' | 'Productie' | 'Lost';

export interface PortfolioStudent {
    id: string;
    first_name: string;
    last_name: string;
    tagline?: string;
    traject: Traject;
    website?: string;
    img: string;
}

export const students: { [name: string]: PortfolioStudent } = {
    'thiebewouters': {
        id: 'thiebewouters',
        first_name: 'Thiebe',
        last_name: 'Wouters',
        traject: 'Realisatie',
        website: 'https://thiebewouters.myportfolio.com/',
        img: THIEBE
    },
    'thanitsornverschueren': {
        id: 'thanitsornverschueren',
        first_name: 'Thanit',
        last_name: 'Verschueren',
        traject: 'AVT',
        website: 'https://thanitsornversch.myportfolio.com/',
        img: THANIT
    },
    'stevenvantichelen': {
        id: 'stevenvantichelen',
        first_name: 'Steven',
        last_name: 'Van Tichelen',
        traject: 'AVT',
        website: 'https://stevenvantichelen.my.canva.site/',
        img: STEVEN
    },
    'sazanloomans': {
        id: 'sazanloomans',
        first_name: 'Sazan',
        last_name: 'Loomans',
        traject: 'Productie',
        img: SAZAN
    },
    'robincooremans': {
        id: 'robincooremans',
        first_name: 'Robin',
        last_name: 'Cooremans',
        traject: 'AVT',
        website: 'https://robincooremans.myportfolio.com/work',
        img: ROBIN
    },
    'pimvergeest': {
        id: 'pimvergeest',
        first_name: 'Pim',
        last_name: 'Vergeest',
        traject: 'Realisatie',
        website: 'https://www.pimvergeest.nl/',
        img: PIM
    },
    'mozalbak': {
        id: 'mozalbak',
        first_name: 'Mo',
        last_name: 'Zalbak',
        traject: 'Realisatie',
        website: 'https://mohammadzalbak.my.canva.site/',
        img: MO
    },
    'owenvandoorslaer': {
        id: 'owenvandoorslaer',
        first_name: 'Owen',
        last_name: 'Van Doorslaer',
        traject: 'AVT',
        website: 'https://owenthecreator.com/',
        img: OWEN
    },
    'mirademulder': {
        id: 'mirademulder',
        first_name: 'Mira',
        last_name: 'De Mulder',
        traject: 'Realisatie',
        website: 'https://mirademulder.myportfolio.com/work',
        img: MIRA
    },
    'margauxdecleyre': {
        id: 'margauxdecleyre',
        first_name: 'Margaux',
        last_name: 'Decleyre',
        traject: 'Realisatie',
        website: 'https://margauxsmontage.my.canva.site/portfolio',
        img: MARGAUX
    },
    'martvandenheuvel': {
        id: 'martvandenheuvel',
        first_name: 'Mart',
        last_name: 'Van Den Heuvel',
        traject: 'Realisatie',
        website: 'http://cine-mart.com/',
        img: MART
    },
    'marievermeulen': {
        id: 'marievermeulen',
        first_name: 'Marie',
        last_name: 'Vermeulen',
        traject: 'Realisatie',
        website: 'https://marievermeulen.my.canva.site/',
        img: MARIE
    },
    'maartenaerssens': {
        id: 'maartenaerssens',
        first_name: 'Maarten',
        last_name: 'Aerssens',
        traject: 'AVT',
        website: 'https://maartenaerssens.be/',
        img: MAARTEN
    },
    'linavannerum': {
        id: 'linavannerum',
        first_name: 'Lina',
        last_name: 'Vannerum',
        traject: 'Realisatie',
        website: 'https://linavannerum18.wixsite.com/vannlina',
        img: LINA
    },
    'kianikhatrichetri': {
        id: 'kianikhatrichetri',
        first_name: 'Kiani',
        last_name: 'Khatri Chetri',
        traject: 'Realisatie',
        img: KIANI
    },
    'julescnudde': {
        id: 'julescnudde',
        first_name: 'Jules',
        last_name: 'Cnudde',
        traject: 'Realisatie',
        website: 'https://www.julescnudde.com/',
        img: JULES
    },
    'lukasvleugels': {
        id: 'lukasvleugels',
        first_name: 'Lukas',
        last_name: 'Vleugels',
        traject: 'Realisatie',
        website: 'https://lukas-vleugels.my.canva.site/',
        img: LUKAS
    },
    'khanyisilevanderheide': {
        id: 'khanyisilevanderheide',
        first_name: 'Khanyisile',
        last_name: 'Van Der Heide',
        traject: 'Realisatie',
        website: 'https://khanyisilevanderheide.my.canva.site/khanyisile-van-der-heide',
        img: KHANYISILE
    },
    'femkebeeckman': {
        id: 'femkebeeckman',
        first_name: 'Femke',
        last_name: 'Beeckman',
        traject: 'AVT',
        website: 'https://femkebeeckman.be/',
        img: FEMKE
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
        website: 'https://casderidder.myportfolio.com/work',
        img: CAS
    },
    'brentdewin': {
        id: 'brentdewin',
        first_name: 'Brent',
        last_name: 'De Win',
        traject: 'AVT',
        website: 'https://brentdewin.my.canva.site/',
        img: BRENTDW
    },
    'alexandramees': {
        id: 'alexandramees',
        first_name: 'Alexandra',
        last_name: 'Mees',
        traject: 'Productie',
        website: 'https://alexandramees1dcc.myportfolio.com/home',
        img: ALEXANDRA
    },
    'aimyvandenbemden': {
        id: 'aimyvandenbemden',
        first_name: 'Aimy',
        last_name: 'Vanden Bemden',
        traject: 'Productie',
        website: 'https://portfolio-aimyvandenbemden.my.canva.site/',
        img: AIMY
    },
    'warddeleersnyder': {
        id: 'warddeleersnyder',
        first_name: 'Ward',
        last_name: 'Deleersnyder',
        traject: 'AVT',
        website: 'https://warddeleersnyder.com',
        img: WARD
    },
    'lukakeunen': {
        id: 'lukakeunen',
        first_name: 'Luka',
        last_name: 'Keunen',
        traject: 'Realisatie',
        website: 'https://lukanie.my.canva.site/portfolio',
        img: LUKA
    },
    'driesvandormael': {
        id: 'driesvandormael',
        first_name: 'Dries',
        last_name: 'Vandormael',
        traject: 'AVT',
        website: 'https://driesvandormael.my.canva.site/',
        img: DRIES
    },
    'wouttemmerman': {
        id: 'wouttemmerman',
        first_name: 'Wout',
        last_name: 'Temmerman',
        traject: 'AVT',
        website: 'https://temmermanwout.my.canva.site/temmerman-wout',
        img: WOUT
    },
    'brentcauberghs': {
        id: 'brentcauberghs',
        first_name: 'Brent',
        last_name: 'Cauberghs',
        traject: 'Realisatie',
        website: 'https://brentcauberghs.my.canva.site/',
        img: BRENTC
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
        website: 'https://opheliadelhaye.wixsite.com/my-site-1',
        img: OPHELIA
    },
    'ferremeyhi': {
        id: 'ferremeyhi',
        first_name: 'Ferre',
        last_name: 'Meyhi',
        traject: 'Productie',
        website: 'https://ferremeyhi.my.canva.site/portfolio2025',
        img: FERRE
    },
    'tuurvangrimde': {
        id: 'tuurvangrimde',
        first_name: 'Tuur',
        last_name: 'Vangrimde',
        traject: 'Realisatie',
        website: 'https://tuurvangrimde.my.canva.site/',
        img: TUUR
    },
    'jonaschepens': {
        id: 'jonaschepens',
        first_name: 'Jona',
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
        website: 'https://maxim.infonet.media',
        img: MAXIM
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
    },
    'janamalaeb': {
        id: 'janamalaeb',
        first_name: 'Jana',
        last_name: 'Malaeb',
        traject: 'Lost' // TODO verify
    }
};

export const nonLostStudents = Object.values(students).filter(student => student.traject !== 'Lost');

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

