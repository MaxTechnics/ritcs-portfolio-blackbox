import ICHIBAN_DIMITRI from '@/assets/projectimg/ichiban_dimitri.jpg';
import REPO_LAKEN_STREETLIGHT from '@/assets/projectimg/repo_laken_streetlight.jpg';
import REPO_LAKEN_STONE from '@/assets/projectimg/repo_laken_stone.jpg';
import REPO_EVERE_GRAFFITI from '@/assets/projectimg/repo_evere_graffiti.jpg';
import REPO_EVERE_CNOPS from '@/assets/projectimg/repo_evere_pietercnops.jpg';
import REPO_EVERE_WIJN from '@/assets/projectimg/repo_evere_wijn.jpg';
import REPO_ELSENE_ABDIJ from '@/assets/projectimg/repo_elsene_abdij.jpg';
import REPO_ELSENE_CHALET from '@/assets/projectimg/repo_elsene_chalet.jpg';
import REPO_ELSENE_LUXIOL from '@/assets/projectimg/repo_elsene_luxiol.jpg';
import REPO_ANDERLECHT_CHRISTOPHE from '@/assets/projectimg/repo_anderlecht_christophe.jpg';
import REPO_ANDERLECHT_SKATETOUR from '@/assets/projectimg/repo_anderlecht_skatetour.jpg';
import REPO_ANDERLECHT_MUSCLES from '@/assets/projectimg/repo_anderlecht_muscles.jpg';

import { students } from "./students";

type PortfolioTag = 'AVT' | 'Productie' | 'Realisatie';
type PortfolioFunction = 'Camera' | 'DOP' | 'Montage' | 'Regie' | 'Regie Assistent' | 'Geluid' | 'Chef Geluid' | 'Mixing' | 'Licht' | 'Productie' | 'Catering' | 'Acteur' | 'Grafisch Design' | 'Met dank aan';
type Credit = {
    personID: string;
    function: PortfolioFunction;
}

export interface PortfolioProject {
    id: string;
    title: string;
    subtitle?: string;
    workyear: '2223' | '2324' | '2425';
    description: string;
    image: string;
    tags: PortfolioTag[];
    personal: boolean;
    owner?: keyof typeof students;
    credits: Credit[];
}

export const projects: PortfolioProject[] = [
    {
        id: 'ichiban_dimitri', // tikiri!
        title: 'Repo Laken, Dimitri',
        subtitle: 'De redder van Mini Europa, in Mini Europa',
        workyear: '2223',
        description: 'Human Interest reportage over Dimitri, een fan van Mini Europa, vlogger, die ook een actie startte tegen het sluiten ervan.',
        image: ICHIBAN_DIMITRI,
        tags: ['Brussel', 'Reportage'],
        personal: false,
        credits: [
            { personID: 'maximcoppieters', function: 'Montage' },
            { personID: 'alexandramees', function: 'Productie' },
            { personID: 'alexandramees', function: 'Catering' },
            { personID: 'jonaschepens', function: 'Chef Geluid' },
            { personID: 'thibaultschroeven', function: 'Camera' },
            { personID: 'tuurvangrimde', function: 'Regie' },
            { personID: 'thiebewouters', function: 'Regie' }
        ]
    },
    {
        id: 'repo_laken_streetlight', // tikiri
        title: 'Street Light',
        subtitle: 'Bezienswaardigheid Laken',
        workyear: '2223',
        description: 'Reportage door het straatlantaarnmuseum van Laken.',
        image: REPO_LAKEN_STREETLIGHT,
        tags: ['Brussel', 'Reportage'],
        personal: false,
        credits: [
            { personID: 'maximcoppieters', function: 'Geluid' },
            { personID: 'margauxdecleyre', function: 'Regie' },
            { personID: 'nelgevaerts', function: 'Productie' },
            { personID: 'alexandramees', function: 'Productie' },
            { personID: 'nemosauzeat', function: 'Acteur' },
            { personID: 'jonaschepens', function: 'Camera' },
            { personID: 'linavannerum', function: 'Regie' }
        ]
    },
    {
        id: 'repo_laken_stone', // tikiri
        title: 'The Stone of Laeken',
        subtitle: 'Bezienswaardigheid Laken',
        workyear: '2223',
        description: 'Reportage over de steen van Laken',
        image: REPO_LAKEN_STONE,
        tags: ['Brussel', 'Reportage'],
        personal: false,
        credits: [
            { personID: 'nelgevaerts', function: 'Productie' },
            { personID: 'maxjaamann', function: 'Regie' },
            { personID: 'alexandramees', function: 'Productie' },
            { personID: 'nemosauzeat', function: 'Camera' },
            { personID: 'jonaschepens', function: 'Montage' },
            { personID: 'thibaultschroeven', function: 'Geluid' },
            { personID: 'thibaultschroeven', function: 'Montage' },
            { personID: 'tuurvangrimde', function: 'Regie' }
        ]
    },
    {
        id: 'repo_evere_graffiti',
        title: 'Graffiti Tour Evere',
        subtitle: 'Bezienwaardigheid Evere',
        workyear: '2223',
        description: 'Een leuke promotievideo voor een graffiti tour in Evere.',
        image: REPO_EVERE_GRAFFITI,
        tags: ['Brussel', 'Reportage'],
        personal: false,
        credits: [
            { personID: 'maartenaerssens', function: 'Camera' },
            { personID: 'julescnudde', function: 'Regie' },
            { personID: 'warddeleersnyder', function: 'Montage' },
            { personID: 'sazanloomans', function: 'Productie' },
            { personID: 'amelieschreurs', function: 'Productie' }
        ]
    },
    {
        id: 'repo_evere_pietercnops',
        title: 'Pieter Cnops Museum',
        subtitle: 'Bezienwaardigheid Evere',
        workyear: '2223',
        description: 'Toernavis presenteert een toeristische reportage over het gemeentelijk museum Pieter Cnops en Het Brussels Museum van de Molen en de Voeding.',
        image: REPO_EVERE_CNOPS,
        tags: ['Brussel', 'Reportage'],
        personal: false,
        credits: [
            { personID: 'maartenaerssens', function: 'Camera' },
            { personID: 'maartenaerssens', function: 'Montage' },
            { personID: 'brentcauberghs', function: 'Regie' },
            { personID: 'brentcauberghs', function: 'Montage' },
            { personID: 'julescnudde', function: 'Acteur' },
            { personID: 'bapkekauwenbergs', function: 'Camera' },
            { personID: 'khanyisilevanderheide', function: 'Montage' },
            { personID: 'khanyisilevanderheide', function: 'Regie' },
            { personID: 'stevenvantichelen', function: 'Geluid' },
            { personID: 'sazanloomans', function: 'Productie' },
            { personID: 'amelieschreurs', function: 'Productie' }
        ]
    },
    {
        id: 'repo_evere_wijn',
        title: 'Smiley Please',
        subtitle: 'Bezienwaardigheid Evere',
        workyear: '2223',
        description: 'Reportage over het leven na de dood van een geliefde. We volgen Nathalie De Bruyn die deel uitmaakt van de derde generatie wijnhandelaars in Evere en wie recentelijk haar geliefde echtgenoot verloor. Ze blijft achter met een huis vol schatten en herinneringen aan haar verleden met haar man. Hoe staat zij in het leven na dit verlies?',
        image: REPO_EVERE_WIJN,
        tags: ['Brussel', 'Reportage'],
        personal: false,
        credits: [
            { personID: 'warddeleersnyder', function: 'Geluid' },
            { personID: 'sazanloomans', function: 'Productie' },
            { personID: 'amelieschreurs', function: 'Productie' },
            { personID: 'stevenvantichelen', function: 'Camera' },
            { personID: 'seppevijverman', function: 'Regie' },
            { personID: 'lukasvleugels', function: 'Regie' },
            { personID: 'lisekerckx', function: 'Productie' }
        ]
    },
    {
        id: 'repo_elsene_abdij',
        title: 'Abdij Ter Kameren',
        subtitle: 'Bezienwaardigheid Elsene',
        workyear: '2223',
        description: 'We nemen een kijke in Brussel, Elsene, naar het Abdij Ter Kameren.',
        image: REPO_ELSENE_ABDIJ,
        tags: ['Brussel', 'Reportage'],
        personal: false,
        credits: [
            { personID: 'femkebeeckman', function: 'Mixing' },
            { personID: 'casderidder', function: 'Montage' },
            { personID: 'lukasjoosten', function: 'Montage' },
            // {personID: 'kianikhatrichetri', function: 'Reporter'},
            { personID: 'abdoulienije', function: 'Camera' },
            { personID: 'wouttemmerman', function: 'Montage' },
            { personID: 'wouttemmerman', function: 'Mixing' },
            { personID: 'lisekerckx', function: 'Productie' }
        ]
    },
    {
        id: 'repo_elsene_chalet',
        title: 'Chalet Robinson',
        subtitle: 'Bezienwaardigheid Elsene',
        workyear: '2223',
        description: 'Een mooie rondleiding van Chalet Robinson in het Ter Kameren Bos',
        image: REPO_ELSENE_CHALET,
        tags: ['Brussel', 'Reportage'],
        personal: false,
        credits: [
            { personID: 'femkebeeckman', function: 'Camera' },
            { personID: 'femkebeeckman', function: 'Montage' },
            { personID: 'lisekerckx', function: 'Productie' },
            { personID: 'wouttemmerman', function: 'Geluid' },
            { personID: 'martvandenheuvel', function: 'Regie' },
            { personID: 'marievermeulen', function: 'Regie' }
        ]
    },
    {
        id: 'repo_elsene_luxiol',
        title: 'Luxiol',
        subtitle: 'Bezienwaardigheid Elsene',
        workyear: '2223',
        description: 'Reportage over Fred, uitbater van de winkel Luxiol te Elsene',
        image: REPO_ELSENE_LUXIOL,
        tags: ['Brussel', 'Reportage'],
        personal: false,
        credits: [] // FIXME mobo missing credits!!!!!!!!!!
    },
    {
        id: 'repo_anderlecht_christophe',
        title: 'Christophe Caurdon',
        subtitle: 'Bezienwaardigheid Anderlecht',
        workyear: '2223',
        description: 'We volgen Christophe Caurdon in het volwassen onderwijs in Anderlecht. Hij vertelt ons zijn artistieke carrière in de academie.',
        image: REPO_ANDERLECHT_CHRISTOPHE,
        tags: ['Brussel', 'Reportage'],
        personal: false,
        credits: [
            { personID: 'nansialkhateeb', function: 'Regie' },
            { personID: 'robincooremans', function: 'Camera' },
            { personID: 'brentdewin', function: 'Geluid' },
            { personID: 'aimyvandenbemden', function: 'Productie' },
            { personID: 'driesvandormael', function: 'Montage' },
            { personID: 'ferremeyhi', function: 'Productie' }
        ]
    },
    {
        id: 'repo_anderlecht_skatetour',
        title: 'Skate tour Anderlecht',
        subtitle: 'Bezienwaardigheid Anderlecht',
        workyear: '2223',
        description: 'Dit is één van de 3 reportages dat de studenten van 1PBAK voor het opleidingsonderdeel \'Single Cam\' moeten maken met hun productiehuis. Dit bevat de reportage over Toerisme van het productiehuis Beton!',
        image: REPO_ANDERLECHT_SKATETOUR,
        tags: ['Brussel', 'Reportage'],
        personal: false,
        credits: [
            { personID: 'robincooremans', function: 'Montage' },
            { personID: 'robincooremans', function: 'Camera' },
            { personID: 'opheliadelhaye', function: 'Montage' },
            { personID: 'opheliadelhaye', function: 'Regie' },
            { personID: 'mirademulder', function: 'Regie Assistent' },
            { personID: 'mirademulder', function: 'Met dank aan' },
            { personID: 'brentdewin', function: 'Geluid' },
            { personID: 'ferremeyhi', function: 'Productie' },
            { personID: 'aimyvandenbemden', function: 'Productie' },
            { personID: 'driesvandormael', function: 'Montage' },
            { personID: 'driesvandormael', function: 'Grafisch Design' }
        ]
    },
    {
        id: 'repo_anderlecht_muscles',
        title: 'The muscles from Brussels',
        subtitle: 'Bezienwaardigheid Anderlecht',
        workyear: '2223',
        description: 'Een landmark, saai? Wij bewijzen het tegendeel met deze inspirerende promotiefilm voor de Anderlechtenaren. In Anderlecht staat namelijk dit heroïsche beeld van J.C.V.D. dat niet alleen ons heeft geïnspireerd voor het maken van deze video, maar ook ons personage.',
        image: REPO_ANDERLECHT_MUSCLES,
        tags: ['Brussel', 'Reportage'],
        personal: false,
        credits: [
            { personID: 'ferremeyhi', function: 'Productie' },
            { personID: 'owenvandoorslaer', function: 'DOP' },
            { personID: 'pimvergeest', function: 'Regie' },
            { personID: 'aimyvandenbemden', function: 'Productie' },
        ]
    },









    {
        id: 'mxm_detweedegolf',
        title: 'De Tweede Golf',
        subtitle: 'Captatie en montage',
        workyear: '2425',
        description: 'Tijdens stage bij INSCENE kreeg ik de oppertuniteit om de volledige captatie en montage van een theatervoorsetlling "De Tweede Golf" te beheren en uit te voeren.',
        image: '',
        tags: ['Camera', 'Montage'],
        personal: true,
        owner: 'maximcoppieters',
        credits: [
            { personID: 'maximcoppieters', function: 'Camera' },
            { personID: 'maximcoppieters', function: 'Montage' },
            { personID: 'maximcoppieters', function: 'Technisch verantwoordelijke' }
        ]
    }
]
