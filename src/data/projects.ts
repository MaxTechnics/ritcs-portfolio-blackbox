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

import PRAKT_1_MATISSE from '@/assets/projectimg/prakt_1_matisse.jpg';
import PRAKT_1_RESET from '@/assets/projectimg/prakt_1_reset.jpg';
import PRAKT_1_CRESENDO from '@/assets/projectimg/prakt_1_cresendo.jpg';
import PRAKT_1_JAZZ from '@/assets/projectimg/prakt_1_jazz.jpg';
import PRAKT_2_CHRISTIANCLUB from '@/assets/projectimg/prakt_2_cristianclub.jpg';
import PRAKT_2_CIGGY from '@/assets/projectimg/prakt_2_ciggy.jpg';
import PRAKT_2_NOHANDS from '@/assets/projectimg/prakt_2_nohands.jpg';
import PRAKT_2_GUMMY from '@/assets/projectimg/prakt_2_gummy.jpg';
import PRAKT_3_RUSH from '@/assets/projectimg/prakt_3_rush.jpg';
import PRAKT_3_DANSAERT from '@/assets/projectimg/prakt_3_dansaert.jpg';
import PRAKT_3_DYSTOPIA from '@/assets/projectimg/prakt_3_dystopia.jpg';
import PRAKT_3_ADAM from '@/assets/projectimg/prakt_3_adam.jpg';



import { students, type StudentId } from "./students";

type PortfolioTag = 'AVT' | 'Productie' | 'Realisatie';
type PortfolioFunction = 'Camera' |
    'DOP' |
    'Camera Assistent' |
    'Montage' |
    'Regie' |
    'Regie Assistent' |
    'Geluid' |
    'Chef Geluid' |
    'Mixing' |
    'Licht' |
    'Productie' |
    'Catering' |
    'Acteur' |
    'Grafisch Design' |
    'Grading' |
    'Techniek' |
    'Chef Techniek' |
    'Art Director' |
    'Met dank aan';
type Credit = {
    personID: StudentId;
    function: PortfolioFunction;
}

export interface PortfolioProject {
    id: string;
    title: string;
    subtitle?: string;
    workyear: '2223' | '2324' | '2425';
    description: string;
    image: string;
    // tags: PortfolioTag[];
    tags: string[]; // TODO just silencing these during collaboration to make intellisense shut the fuck up
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
    // Year 2
    {
        id: 'prakt_1_matisse',
        title: 'De Doorbraak',
        subtitle: 'Praktijk 1, Matisse & the martians',
        workyear: '2324',
        description: 'Jonge, nieuwe bands worden voorgesteld om op deze manier verschillende generaties kennis te laten maken met de hedendaagse muziekscene en opkomende artiesten. In deze aflevering staat de Limburgse indie-rock band \'Matisse & The Martians\' in de spotlight!',
        image: PRAKT_1_MATISSE,
        tags: ['Multicam', 'Muziek'],
        personal: false,
        credits: [
            { personID: 'femkebeeckman', function: 'Grading' },
            { personID: 'brentcauberghs', function: 'Camera' },
            { personID: 'julescnudde', function: 'Camera' },
            { personID: 'julescnudde', function: 'Regie' },
            { personID: 'maximcoppieters', function: 'Chef Geluid' },
            { personID: 'warddeleersnyder', function: 'Camera' },
            { personID: 'opheliadelhaye', function: 'Regie' },
            { personID: 'casderidder', function: 'Grafisch Design' },
            { personID: 'kianikhatrichetri', function: 'Regie' },
            { personID: 'alexandramees', function: 'Productie' },
            { personID: 'ferremeyhi', function: 'Productie' },
            { personID: 'jonaschepens', function: 'Camera' },
            { personID: 'amelieschreurs', function: 'Productie' },
            { personID: 'khanyisilevanderheide', function: 'Camera' },
            { personID: 'owenvandoorslaer', function: 'Licht' },
            { personID: 'driesvandormael', function: 'Camera' },
            { personID: 'tuurvangrimde', function: 'Camera' },
            { personID: 'linavannerum', function: 'Camera' },
            { personID: 'pimvergeest', function: 'Camera' },
            { personID: 'marievermeulen', function: 'Camera' },
            { personID: 'lukakeunen', function: 'Camera' },
            { personID: 'thiebewouters', function: 'Camera' },
            { personID: 'thiebewouters', function: 'Regie' },
            { personID: 'sazanloomans', function: 'Productie' },
            { personID: 'aimyvandenbemden', function: 'Productie' },
            { personID: 'lisekerckx', function: 'Productie' },
        ]
    },
    {
        id: 'prakt_1_reset',
        title: 'RE:SET',
        subtitle: 'Praktijk 1, Dav ID',
        workyear: '2324',
        description: 'Een muziekprogramma dat de kijker meeneemt naar de geschiedenis van R&B. De show wordt opgesplitst in 4 delen, 4 decennia: Jaren 50, 70, 90 en nu. Er komt een band spelen: Dav ID. Zij brengen 4 nummers waarvan de stijl volgt met het tijdperk waar we inzitten.',
        image: PRAKT_1_RESET,
        tags: ['Multicam', 'Muziek'],
        personal: false,
        credits: [
            { personID: 'maartenaerssens', function: 'Licht' },
            { personID: 'maartenaerssens', function: 'Chef Techniek' },
            { personID: 'nansialkhateeb', function: 'Regie' },
            { personID: 'brentcauberghs', function: 'Regie' },
            { personID: 'mirademulder', function: 'Regie' },
            { personID: 'lisekerckx', function: 'Productie' },
            { personID: 'lukasjoosten', function: 'Techniek' },
            { personID: 'aimyvandenbemden', function: 'Productie' },
            { personID: 'tuurvangrimde', function: 'Regie' },
            { personID: 'thanitsornverschueren', function: 'Techniek' },
            { personID: 'sazanloomans', function: 'Productie' },
            { personID: 'alexandramees', function: 'Productie' },
            { personID: 'ferremeyhi', function: 'Productie' }
        ]
    },
    {
        id: 'prakt_1_cresendo',
        title: 'Crescendo',
        subtitle: 'Praktijk 1, Warm Exit',
        workyear: '2324',
        description: 'In Deze wekelijkse Show komt er een nieuwe alternatieve up-coming artiest(en) langs die wij bij Crescendo een podium willen geven. Tijdens het programma leren wij de artiest(en) beter kennen d.m.v. interview, reportage en live performances. Deze aflevering hebben we de band \'Warm Exit\' een Brusselse band met een unieke sound in de Post-Punk scene.',
        image: PRAKT_1_CRESENDO,
        tags: ['Multicam', 'Muziek'],
        personal: false,
        credits: [
            { personID: 'femkebeeckman', function: 'Grading' },
            { personID: 'margauxdecleyre', function: 'Regie' },
            { personID: 'brentdewin', function: 'Licht' },
            { personID: 'sazanloomans', function: 'Productie' },
            { personID: 'stevenvantichelen', function: 'Chef Techniek' },
            { personID: 'pimvergeest', function: 'Regie' },
            { personID: 'marievermeulen', function: 'Regie' },
            { personID: 'lukasvleugels', function: 'Regie' },
            { personID: 'aimyvandenbemden', function: 'Productie' },
            { personID: 'lisekerckx', function: 'Productie' },
            { personID: 'alexandramees', function: 'Productie' },
            { personID: 'ferremeyhi', function: 'Productie' }
        ]
    },
    {
        id: 'prakt_1_jazz',
        title: 'The Jazz Bar Live',
        subtitle: 'Praktijk 1, The Jazz Bar',
        workyear: '2324',
        description: 'Het tijdelijke schoolse productiehuis \'Ampoule\' stelt "The Jazz Bar Live" voor. Een 30 minuten durend studioprogramma waarin iedere aflevering een nieuwe band zich komt tonen adhv. hun eigen muziek in de setting van een muziek café. Aansluitend bij de muzikale performances horen interviews en korte reportages.',
        image: PRAKT_1_JAZZ,
        tags: ['Multicam', 'Muziek'],
        personal: false,
        credits: [
            { personID: 'warddeleersnyder', function: 'Chef Geluid' },
            { personID: 'warddeleersnyder', function: 'Techniek' },
            { personID: 'warddeleersnyder', function: 'Grafisch Design' },
            { personID: 'raoullangermans', function: 'Regie' },
            { personID: 'raoullangermans', function: 'Mixing' },
            { personID: 'ferremeyhi', function: 'Productie' },
            // {personID: 'ferremeyhi', function: 'Opnameleider'},
            { personID: 'jonaschepens', function: 'Licht' },
            { personID: 'jonaschepens', function: 'Chef Geluid' },
            { personID: 'jonaschepens', function: 'Chef Techniek' },
            { personID: 'amelieschreurs', function: 'Productie' },
            { personID: 'martvandenheuvel', function: 'Mixing' },
            { personID: 'khanyisilevanderheide', function: 'Regie' },
            { personID: 'khanyisilevanderheide', function: 'Mixing' },
            { personID: 'driesvandormael', function: 'Grafisch Design' },
            { personID: 'driesvandormael', function: 'Techniek' },
            { personID: 'linavannerum', function: 'Regie' },
            { personID: 'linavannerum', function: 'Mixing' },
            { personID: 'sazanloomans', function: 'Productie' },
            { personID: 'aimyvandenbemden', function: 'Productie' },
            { personID: 'alexandramees', function: 'Productie' },
            { personID: 'lisekerckx', function: 'Productie' }
        ]
    },
    {
        id: 'prakt_2_cristianclub',
        title: 'Explode',
        subtitle: 'Praktijk 2, The Christian Club',
        workyear: '2324',
        description: 'Een videoclip over Luca, die probeert doorgaans het verhaal te ontsnappen aan de klauwen van zijn slapenloosheid. Hij zit vol met donkere gedachten en herinneringen wat hem tegenhoudt om van een rustige nachtrust te genieten.',
        image: PRAKT_2_CHRISTIANCLUB,
        tags: ['Videoclip'],
        personal: false,
        credits: [
            { personID: 'maartenaerssens', function: 'Montage' },
            { personID: 'maartenaerssens', function: 'DOP' },
            { personID: 'nansialkhateeb', function: 'Art Director' },
            { personID: 'brentcauberghs', function: 'Regie' },
            // {personID: 'dallaechin', function: 'Kleedster'},
            { personID: 'mirademulder', function: 'Regie' },
            { personID: 'lisekerckx', function: 'Productie' },
            { personID: 'nemosauzeat', function: 'Techniek' },
            { personID: 'wouttemmerman', function: 'Licht' },
            { personID: 'aimyvandenbemden', function: 'Regie Assistent' },
            { personID: 'amelieschreurs', function: 'Script' },
            { personID: 'tuurvangrimde', function: 'Grading' },
            { personID: 'tuurvangrimde', function: 'Art Director' },
            { personID: 'thanitsornverschueren', function: 'Camera Assistent' }
        ]
    },
    {
        id: 'prakt_2_ciggy',
        title: 'Sunny Day - Ciggy Sunday',
        subtitle: 'Praktijk 2, Ciggy Sunday',
        workyear: '2324',
        description: 'Wij hebben een videoclip gemaakt over een Hugo. Hij beleeft elke dag opnieuw en ontdekt uiteindelijk dat hij een vis is.',
        image: PRAKT_2_CIGGY,
        tags: ['Videoclip'],
        personal: false,
        credits: [
            { personID: 'femkebeeckman', function: 'Grading' },
            { personID: 'margauxdecleyre', function: 'Art Director' },
            { personID: 'brentdewin', function: 'Montage' },
            { personID: 'sazanloomans', function: 'Productie' },
            { personID: 'alexandramees', function: 'Regie Assistent' },
            { personID: 'ferremeyhi', function: 'Script' },
            { personID: 'stevenvantichelen', function: 'DOP' },
            { personID: 'pimvergeest', function: 'Regie' },
            { personID: 'lukasvleugels', function: 'Art Director' }
        ]
    },
    {
        id: 'prakt_2_nohands',
        title: 'No Hands',
        subtitle: 'Praktijk 2, Steve',
        workyear: '2324',
        description: 'Muziekvideoclip van BOLD voor het nummer \'NO HANDS\' van opkomende band STEVE. Een gestoorde man leeft samen in een kraakpand met twee figuren uit zijn verleden, die slechts een illusie van zijn schizofrenie zijn. Deze figuren willen hem de diepte in sleuren in plaats van hem een hand te helpen.',
        image: PRAKT_2_NOHANDS,
        tags: ['Videoclip'],
        personal: false,
        credits: [
            { personID: 'julescnudde', function: 'Acteur' },
            { personID: 'julescnudde', function: 'Grading' },
            { personID: 'julescnudde', function: 'Regie' },
            { personID: 'robincooremans', function: 'Licht' },
            { personID: 'maximcoppieters', function: 'DIT' },
            { personID: 'maximcoppieters', function: 'Techniek' },
            { personID: 'opheliadelhaye', function: 'Art Director' },
            { personID: 'casderidder', function: 'Camera Assistent' },
            { personID: 'sazanloomans', function: 'Regie Assistent' },
            { personID: 'lisekerckx', function: 'Script' },
            { personID: 'kianikhatrichetri', function: 'Art Director' },
            { personID: 'kianikhatrichetri', function: 'Makeup' },
            { personID: 'alexandramees', function: 'Productie' },
            { personID: 'owenvandoorslaer', function: 'DOP' },
            { personID: 'owenvandoorslaer', function: 'Montage' },
            { personID: 'thiebewouters', function: 'Regie' }
        ]
    },
    {
        id: 'prakt_2_gummy',
        title: 'Blissful',
        subtitle: 'Praktijk 2, Gummy Green',
        workyear: '2324',
        description: 'Videoclip voor Blissful van Gummy Green',
        image: PRAKT_2_GUMMY,
        tags: ['Videoclip'],
        personal: false,
        credits: [
            { personID: 'linavannerum', function: 'Regie' },
            { personID: 'ferremeyhi', function: 'Regie Assistent' },
            { personID: 'amelieschreurs', function: 'Productie' },
            { personID: 'khanyisilevanderheide', function: 'Art Director' },
            { personID: 'martvandenheuvel', function: 'Decor' },
            { personID: 'lukakeunen', function: 'Styling' },
            { personID: 'aimyvandenbemden', function: 'Script' },
            { personID: 'jonaschepens', function: 'Licht' },
            { personID: 'driesvandormael', function: 'Camera Assistent' },
            { personID: 'warddeleersnyder', function: 'Camera' }
        ]
    },
    {
        id: 'prakt_3_rush',
        title: 'Rush',
        subtitle: 'Praktijk 3',
        workyear: '2324',
        description: 'Een interactieve, experimentele installatie waar we met licht, geluid en projectie om de kijker/fietser bewuster lieten maken van het verkeer',
        image: PRAKT_3_RUSH,
        tags: ['Installatie'],
        personal: false,
        credits: [
            { personID: 'maartenaerssens', function: 'Licht' },
            { personID: 'femkebeeckman', function: 'Chef Techniek' },
            { personID: 'julescnudde', function: 'Regie' },
            { personID: 'brentdewin', function: 'Chef Techniek' },
            { personID: 'amelieschreurs', function: 'Productie' },
            { personID: 'wouttemmerman', function: 'Geluid' },
            { personID: 'tuurvangrimde', function: 'Regie' }
        ]
    },
    {
        id: 'prakt_3_dansaert',
        title: 'DANSAeRT',
        subtitle: 'Praktijk 3',
        workyear: '2324',
        description: '',// TODO
        image: PRAKT_3_DANSAERT,
        tags: ['Installatie'],
        personal: false,
        credits: [
            { personID: 'nansialkhateeb', function: 'Art Director' },
            { personID: 'lisekerckx', function: 'Productie' },
            { personID: 'janamalaeb', function: 'Licht' },
            { personID: 'ferremeyhi', function: 'Productie' },
            { personID: 'driesvandormael', function: 'Techniek' },
            { personID: 'marievermeulen', function: 'Regie' }
        ]
    },
    {
        id: 'prakt_3_adam',
        title: 'This is Adam',
        subtitle: 'Praktijk 3',
        workyear: '2324',
        description: '', // TODO
        image: PRAKT_3_ADAM,
        tags: ['Installatie'],
        personal: false,
        credits: [
            { personID: 'martvandenheuvel', function: 'Regie' },
            { personID: 'brentcauberghs', function: 'Montage' }
        ]
    },
    {
        id: 'prakt_3_dystopia',
        title: 'Dystopia',
        subtitle: 'Praktijk 3',
        workyear: '2324',
        description: 'Een audio- en VR installatie die het leven van een vrouw in de straten van Brussel demonstreert',
        image: PRAKT_3_DYSTOPIA,
        tags: ['Installatie'],
        personal: false,
        credits: [
            { personID: 'maximcoppieters', function: 'Techniek' },
            { personID: 'maximcoppieters', function: 'Ontwikkelaar' },
            { personID: 'kianikhatrichetri', function: 'Ontwikkelaar' },
            { personID: 'opheliadelhaye', function: 'Art Director' },
            { personID: 'kianikhatrichetri', function: 'Camera' },
            { personID: 'kianikhatrichetri', function: 'Montage' },
            { personID: 'khanyisilevanderheide', function: 'Productie' },
            { personID: 'khanyisilevanderheide', function: 'Script' },
            { personID: 'stevenvantichelen', function: 'Acteur' },
            { personID: 'stevenvantichelen', function: 'Geluid' },
            { personID: 'stevenvantichelen', function: 'Mixage' },
            { personID: 'thanitsornverschueren', function: 'Acteur' },
            { personID: 'thanitsornverschueren', function: 'Productie' }
        ]
    },
    {
        id: 'prakt_3_connect',
        title: 'Connect',
        subtitle: 'Praktijk 3',
        workyear: '2324',
        description: '', // TODO
        // image: PRAKT_3_CONNECT, // FIXME
        image: '',
        tags: ['Installatie'],
        personal: false,
        credits: [
            { personID: 'margauxdecleyre', function: 'Regie Assistent' },
            { personID: 'warddeleersnyder', function: 'Promotor' },
            { personID: 'mirademulder', function: 'Regie Assistent' },
            { personID: 'casderidder', function: 'DOP' },
            { personID: 'casderidder', function: 'Geluid' },
            { personID: 'lukasvleugels', function: 'Regie Assistent' },
            { personID: 'thiebewouters', function: 'Techniek' },
            { personID: 'aimyvandenbemden', function: 'Productie' }
        ]
    },
    // {
    //     id: 'prakt_3_womb',
    //     title: 'the womb',
    //     subtitle: 'Praktijk 3',
    //     workyear: '2324',
    //     description: 'be ready to be born again',
    //     // image: PRAKT_3_WOMB,
    //     image: '', // FIXME
    //     tags: ['Installatie'],
    //     personal: false,
    //     credits: [
    //         { personID: 'alexandramees', function: 'Productie' },
    //         { personID: 'sazanloomans', function: 'Productie' },
    //         { personID: 'pimvergeest', function: 'Regie' },
    //         { personID: 'linavannerum', function: 'Regie' },
    //         { personID: 'owenvandoorslaer', function: 'Techniek' },
    //         { personID: 'jonaschepens', function: 'Techniek' }
    //     ]
    // }
    // Year 3
    // {
    //     id: 'bc_sport'
    // },





    // Aimy's contributions
    // {
    //         id: 'wildcard_MONOPOLY'
    //     title: 'Monopoly',
    //         subtitle:
    //             workyear: '2425'
    //     description:
    //         Image:
    //             Tags:
    //         Personal:
    //             credits:

    //     }

    // {
    //         id: 'wildcard_SYMPOSIUM'
    //     title: 'SYMPOSIUM',
    //         subtitle:
    //             workyear: '2425'
    //     description:
    //         Image:
    //             Tags:
    //         Personal:
    //             credits:

    //     }

    // {
    //         id: 'wildcard_RikMeyhi',
    //         title: 'Rik Meyhi',
    //         subtitle: '', // XXX
    //         workyear: '2425',
    //         description: 'Een portret over ex-wielrenner en mijn opa: Rik Meyhi',
    //         image: '', // TODO mxm
    //         tags: [],
    //         personal: true,
    //         credits: [] // XXX
    // },
    // {
    //         id: 'wildcard_LunaeDolore'
    //     title: 'Luna e Dolore',
    //         subtitle:
    //             workyear: '2425'
    //     description: 'Een experimentele promotievideo voor het kledingmerk Luna e Dolore'
    //     Image:
    //         Tags:
    //             Personal:
    //         credits: 

    // }

    // {
    //         id: 'wildcard_DurvenDromen'
    //     title: 'Durven Dromen',
    //         subtitle:
    //             workyear: '2425'
    //     description: 'Een minidocu over een gepassioneerd keramiekster die haar dromen volgt
    //     Personal:
    //         credits: 

    // }()per

    // {
    //         id: 'wildcard_Padoo'
    //     title: 'Padoo',
    //         subtitle:
    //             workyear: '2425'
    //     description:
    //         Image:
    //             Tags: ()''PADOO—een naam zo nieuwsgierig als de paddenstoelen waar het voor staat.Deze korte documentaire volgt Wim en Marie - Laure, een koppel dat zeldzame, exotische paddenstoelen kweekt op hun lokale start - upboerderij.Door  hun ogen ontdekken we de schoonheid, de uitdagingen en de intimiteit van iets samen van de grond af opbouwen.Met PADOO wilde ik nieuwsgierigheid wekken – n,  alleen naar paddenstoelen, maar ook naar de mensen erachter.Het is een stille reis in hun wereld, een uitnodiging tot verbinding.'
    //         Personal:
    //     credits: 
    // tr''true
    // }Pim[       { 
    //         ID: 'ferreme 'pimvergeest', function: 'Regie' 'DOP' 'Montage'
    // }


];
