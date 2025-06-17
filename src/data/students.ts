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
import GENERIC from '@/assets/studentimg/generic.png';
import JAMES from '@/assets/studentimg/james.png';

export type Traject = 'AVT' | 'Realisatie' | 'Productie' | 'Lost';

export interface PortfolioStudent {
    id: string;
    first_name: string;
    last_name: string;
    tagline?: string;
    job_titles?: string[];
    traject: Traject;
    website?: string;
    img: string;
}

export const students: { [name: string]: PortfolioStudent } = {
    'thiebewouters': {
        id: 'thiebewouters',
        first_name: 'Thiebe',
        last_name: 'Wouters',
        job_titles: ['Regie', 'Camera', 'Montage'],
        traject: 'Realisatie',
        website: 'https://thiebewouters.myportfolio.com/',
        img: THIEBE
    },
    'thanitsornverschueren': {
        id: 'thanitsornverschueren',
        first_name: 'Thanit',
        last_name: 'Verschueren',
        job_titles: ['Dataset', 'Techniek'],
        traject: 'AVT',
        website: 'https://thanitsornversch.myportfolio.com/',
        img: THANIT
    },
    'stevenvantichelen': {
        id: 'stevenvantichelen',
        first_name: 'Steven',
        last_name: 'Van Tichelen',
        job_titles: ['Klank', 'Chef Techniek'],
        traject: 'AVT',
        website: 'https://stevenvantichelen.my.canva.site/',
        img: STEVEN
    },
    'sazanloomans': {
        id: 'sazanloomans',
        first_name: 'Sazan',
        last_name: 'Loomans',
        job_titles: ['Productie', 'Regie assistent'],
        traject: 'Productie',
        website: 'https://sazanloomans.my.canva.site/',
        img: SAZAN
    },
    'robincooremans': {
        id: 'robincooremans',
        first_name: 'Robin',
        last_name: 'Cooremans',
        job_titles: ['Klank', 'RF'],
        traject: 'AVT',
        website: 'https://robincooremans.myportfolio.com/work',
        img: ROBIN
    },
    'pimvergeest': {
        id: 'pimvergeest',
        first_name: 'Pim',
        last_name: 'Vergeest',
        job_titles: ['Regie'],
        traject: 'Realisatie',
        website: 'https://www.pimvergeest.nl/',
        img: PIM
    },
    'mozalbak': {
        id: 'mozalbak',
        first_name: 'Mohammad',
        last_name: 'Zalbak',
        job_titles: ['Regie', 'Schrijven'],
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
        job_titles: ['Redactie', 'Rekwisieten', 'Klank'],
        traject: 'Realisatie',
        website: 'https://mirademulder.myportfolio.com/work',
        img: MIRA
    },
    'margauxdecleyre': {
        id: 'margauxdecleyre',
        first_name: 'Margaux',
        last_name: 'Decleyre',
        job_titles: ['Regie', 'Art direction', 'Multicam', 'Muziek'],
        traject: 'Realisatie',
        website: 'https://margauxsmontage.my.canva.site/portfolio',
        img: MARGAUX
    },
    'martvandenheuvel': {
        id: 'martvandenheuvel',
        first_name: 'Mart',
        last_name: 'Van Den Heuvel',
        job_titles: ['Regie', 'Show Runner'],
        traject: 'Realisatie',
        website: 'http://cine-mart.com/',
        img: MART
    },
    'marievermeulen': {
        id: 'marievermeulen',
        first_name: 'Marie',
        last_name: 'Vermeulen',
        job_titles: ['Regie', 'Camera', 'montage'],
        traject: 'Realisatie',
        website: 'https://marievermeulen.my.canva.site/',
        img: MARIE
    },
    'maartenaerssens': {
        id: 'maartenaerssens',
        first_name: 'Maarten',
        last_name: 'Aerssens',
        job_titles: ['Camera', 'Grip', 'Drone', 'Licht'],
        traject: 'AVT',
        website: 'https://maartenaerssens.be/',
        img: MAARTEN
    },
    'linavannerum': {
        id: 'linavannerum',
        first_name: 'Lina',
        last_name: 'Vannerum',
        job_titles: ['Regie', 'Art direction', 'Brand identity (artists)'],
        traject: 'Realisatie',
        website: 'https://linavannerum18.wixsite.com/vannlina',
        img: LINA
    },
    'kianikhatrichetri': {
        id: 'kianikhatrichetri',
        first_name: 'Kiani',
        last_name: 'Khatri Chetri',
        job_titles: ['Production design', 'Art direction', 'Set dressing', 'Scrijven'],
        traject: 'Realisatie',
        website: 'https://kikhache.my.canva.site/',
        img: KIANI
    },
    'julescnudde': {
        id: 'julescnudde',
        first_name: 'Jules',
        last_name: 'Cnudde',
        job_titles: ['Regie', 'Camera', 'Art direction', 'Montage'],
        traject: 'Realisatie',
        website: 'https://www.julescnudde.com/',
        img: JULES
    },
    'lukasvleugels': {
        id: 'lukasvleugels',
        first_name: 'Lukas',
        last_name: 'Vleugels',
        job_titles: ['Regie', 'Art direction'],
        traject: 'Realisatie',
        website: 'https://lukas-vleugels.my.canva.site/',
        img: LUKAS
    },
    'khanyisilevanderheide': {
        id: 'khanyisilevanderheide',
        first_name: 'Khanyisile',
        last_name: 'Van Der Heide',
        job_titles: ['Regie', 'Art direction'],
        traject: 'Realisatie',
        website: 'https://khanyisilevanderheide.my.canva.site/khanyisile-van-der-heide',
        img: KHANYISILE
    },
    'femkebeeckman': {
        id: 'femkebeeckman',
        first_name: 'Femke',
        last_name: 'Beeckman',
        job_titles: ['Color grading', 'Camera', 'Montage', 'Shading'],
        traject: 'AVT',
        website: 'https://femkebeeckman.be/',
        img: FEMKE
    },
    'dallaechin': {
        id: 'dallaechin',
        first_name: 'Dallae',
        last_name: 'Chin',
        traject: 'Realisatie',
        website: 'https://dallaechin.tumblr.com/',
        img: GENERIC
    },
    'casderidder': {
        id: 'casderidder',
        first_name: 'Cas',
        last_name: 'De Ridder',
        job_titles: ['Camera', 'Montage'],
        traject: 'AVT',
        website: 'https://casderidder.myportfolio.com/work',
        img: CAS
    },
    'brentdewin': {
        id: 'brentdewin',
        first_name: 'Brent',
        last_name: 'De Win',
        job_titles: ['Camera', 'Montage'],
        traject: 'AVT',
        website: 'https://brentdewin.my.canva.site/',
        img: BRENTDW
    },
    'alexandramees': {
        id: 'alexandramees',
        first_name: 'Alexandra',
        last_name: 'Mees',
        job_titles: ['Productie', 'Regie-assistent'],
        traject: 'Productie',
        website: 'https://alexandramees1dcc.myportfolio.com/home',
        img: ALEXANDRA
    },
    'aimyvandenbemden': {
        id: 'aimyvandenbemden',
        first_name: 'Aimy',
        last_name: 'Vanden Bemden',
        job_titles: ['Productie', 'Montage', 'Sociale media'],
        traject: 'Productie',
        website: 'https://readymag.website/u1365942860/5616206/',
        img: AIMY
    },
    'warddeleersnyder': {
        id: 'warddeleersnyder',
        first_name: 'Ward',
        last_name: 'Deleersnyder',
        job_titles: ['Camera', 'Cinematograaf'],
        traject: 'AVT',
        website: 'https://warddeleersnyder.com',
        img: WARD
    },
    'lukakeunen': {
        id: 'lukakeunen',
        first_name: 'Luka',
        last_name: 'Keunen',
        job_titles: ['Creative producer', 'Commercial'],
        traject: 'Realisatie',
        website: 'https://lukanie.my.canva.site/active-in',
        img: LUKA
    },
    'driesvandormael': {
        id: 'driesvandormael',
        first_name: 'Dries',
        last_name: 'Vandormael',
        job_titles: ['Video & lighting programmer (live event)', 'Broadcast engineer'],
        traject: 'AVT',
        website: 'https://driesvandormael.my.canva.site/',
        img: DRIES
    },
    'wouttemmerman': {
        id: 'wouttemmerman',
        first_name: 'Wout',
        last_name: 'Temmerman',
        job_titles: ['Audio Engineer', 'Music Producer', 'Mixer (post productie, broadcast)'],
        traject: 'AVT',
        website: 'https://temmermanwout.my.canva.site/temmerman-wout',
        img: WOUT
    },
    'brentcauberghs': {
        id: 'brentcauberghs',
        first_name: 'Brent',
        last_name: 'Cauberghs',
        job_titles: ['Camera', 'Montage', 'Regie', 'Fictie'],
        traject: 'Realisatie',
        website: 'https://brentcauberghs.my.canva.site/',
        img: BRENTC
    },
    'nansialkhateeb': {
        id: 'nansialkhateeb',
        first_name: 'Nansi',
        last_name: 'Alkhateeb',
        job_titles: ['Art direction', 'Regie', 'Muziekproductie'],
        traject: 'Realisatie',
        website: 'https://alkhateebnancy.my.canva.site/',
        img: GENERIC
    },
    'opheliadelhaye': {
        id: 'opheliadelhaye',
        first_name: 'Ophelia',
        last_name: 'Delhaye',
        job_titles: ['Art direction', 'Regie', 'Muziekproductie'],
        traject: 'Realisatie',
        website: 'https://opheliadelhaye.wixsite.com/my-site-1',
        img: OPHELIA
    },
    'ferremeyhi': {
        id: 'ferremeyhi',
        first_name: 'Ferre',
        last_name: 'Meyhi',
        job_titles: ['Productie', 'Regie assistent'],
        traject: 'Productie',
        website: 'https://ferremeyhi.my.canva.site/portfolio2025',
        img: FERRE
    },
    'tuurvangrimde': {
        id: 'tuurvangrimde',
        first_name: 'Tuur',
        last_name: 'Vangrimde',
        job_titles: ['Regie', 'Camera', 'Montage'],
        traject: 'Realisatie',
        website: 'https://tuurvangrimde.my.canva.site/',
        img: TUUR
    },
    'jonaschepens': {
        id: 'jonaschepens',
        first_name: 'Jona',
        last_name: 'Schepens',
        job_titles: ['Licht scenografie'],
        traject: 'AVT',
        website: 'https://jona-schepens.webnode.be/portfolio/',
        img: GENERIC
    },
    'maximcoppieters': {
        id: 'maximcoppieters',
        first_name: 'Maxim',
        last_name: 'Coppieters',
        job_titles: ['Chef techniek (broadcast)', 'all-round techniek'],
        tagline: 'Professional nerd :)',
        traject: 'AVT',
        website: 'https://maxim.infonet.media',
        img: GENERIC
    },
    'thibaultschroeven': {
        id: 'thibaultschroeven',
        first_name: 'Thibault',
        last_name: 'Schroeven',
        traject: 'Lost',
        img: GENERIC
    },
    'nelgevaerts': {
        id: 'nelgevaerts',
        first_name: 'Nel',
        last_name: 'Gevaerts',
        traject: 'Lost',
        img: GENERIC
    },
    'nemosauzeat': {
        id: 'nemosauzeat',
        first_name: 'Nemo',
        last_name: 'Sauzeat',
        traject: 'Lost',
        img: GENERIC
    },
    'maxjaamann': {
        id: 'maxjaamann',
        first_name: 'Max',
        last_name: 'Jaamann',
        traject: 'Lost',
        img: GENERIC
    },
    'amelieschreurs': {
        id: 'amelieschreurs',
        first_name: 'Amelie',
        last_name: 'Schreurs',
        traject: 'Lost',
        img: GENERIC
    },
    'bapkekauwenbergs': {
        id: 'bapkekauwenbergs',
        first_name: 'Bapke',
        last_name: 'Kauwenbergs',
        traject: 'Lost',
        img: GENERIC
    },
    'seppevijverman': {
        id: 'seppevijverman',
        first_name: 'Seppe',
        last_name: 'Vijverman',
        traject: 'Lost',
        img: GENERIC
    },
    'lisekerckx': {
        id: 'lisekerckx',
        first_name: 'Lise',
        last_name: 'Kerckx',
        traject: 'Lost',
        img: GENERIC
    },
    'lukasjoosten': {
        id: 'lukasjoosten',
        first_name: 'Lukas',
        last_name: 'Joosten',
        traject: 'Lost',
        img: GENERIC
    },
    'abdoulienije': {
        id: 'abdoulienije',
        first_name: 'Abdoulie',
        last_name: 'Nije',
        traject: 'Lost',
        img: GENERIC
    },
    'raoullangermans': {
        id: 'raoullangermans',
        first_name: 'Raoul',
        last_name: 'Langermans',
        traject: 'Lost',
        img: GENERIC
    },
    'janamalaeb': {
        id: 'janamalaeb',
        first_name: 'Jana',
        last_name: 'Malaeb',
        traject: 'Lost',
        img: GENERIC
    },
    'jamesdepotter': {
        id: 'jamesdepotter',
        first_name: 'James',
        last_name: 'Depotter',
        job_titles: ['Lichtontwerp', 'Licht programmer'],
        traject: 'AVT',
        img: JAMES
    },
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

