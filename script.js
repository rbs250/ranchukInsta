// --- CONFIGURATION ---
const REPO_OWNER = "rbs250"; 
const REPO_NAME = "ranchukInsta";         
const FILE_PATH = "data.json";
// ---------------------

// THE CLEAN LIST: Exactly 174 verified non-followers based on your JSON data.
// Mutuals like RachelKleiman1 and Ehud_yis have been removed.
const nonFollowers = ["fashionpierrebog", "bea_fiedler", "eladshenhav", "yangmunus", "timm_signature", "tomerpetael", "benxphoto", "yuliaplotkinoz", "mustafa3adel", "itay_yatz", "snirdvashh", "ilaidov", "emilislamoglu", "michaelehlersnyc", "shaharmichaeli58", "marcel_schlutt", "kaltblut_magazine", "tal_grushka", "zohar.isaac", "lo.taim", "moshe_sasson", "nathanael.sanna", "mmmmssssquall", "amazingtubetimelapse", "israelenfrancais", "leave_yuli_alone", "trainer_emun", "dipprrrrrrrrrrrr", "kohi.tlv", "olivernordin1", "voidstomper", "perfectly.imperfekt", "thataipage", "yaelala", "klingai_official", "theo_sound", "shelishnider", "analog.it", "yuval_tebol", "figa.link", "sonnowon", "yuruhan_", "projecttlv", "country.life.vlog", "550am", "bobaz.lobster", "galiberman97", "lightricks_life", "ippodotea", "oao_footwear", "liz_y2k", "alexbabycakes", "qoves", "balabarprince", "livdelestal", "lilyallen", "yonatanbary", "dollydoesvlogs", "ivankatrump", "tomahscandles", "plovtandursamsa", "ohneis652", "itssidders", "the.shem.tv", "noa_yehu", "eliana.sachs", "applemartin", "bar__paradiso", "v4studio", "belenaguilera", "fab", "ron_spam_", "acostaeliann", "dollyparton", "ionnalee", "zicksworld", "cappucci_hair_milan_", "yoelbenharrouche", "medalgamexclawcrane", "krumbletv", "greenlight_physiocare", "vivllainous", "igorptash", "nickiminaj", "heyglif", "japaninisrael", "lemondefr", "arabeska_talpiot_restaurant", "juliensebbag", "coloringxgirlx", "raheli", "iamronki", "aige_in", "ijnej", "megumiraar", "eilam_cna", "taoagou", "quimfabregas", "a.latinopoulou", "goldieboutilier", "noashealthybites", "tanyad_real", "miripaskal", "danainternational", "girafa.studio", "letsdsomething", "buildersofmideast", "cydneewithac", "sixsex_bb", "offernissimofficial", "melkiaur", "benjaminbenichoustudio", "azealiabanksforever", "brazyybih", "beatfoot", "theoddanimalspecimens", "yonatan_honig", "nshnv", "vickie_cherie", "cinematographydb", "fbbgrowth", "treger_man", "drorkalir", "thegirljt", "majestuale", "holymariai", "beds_1", "palmistry_globe", "smartdesign.nyc", "windows", "uon.visuals", "quinnwtf_", "memphy", "carcymagazine", "morenaoficial", "gu_for_all_", "okkeijapanese", "lanuitamericaine", "hey4ro", "mujde.official", "kompromatmusic", "f2max_intelligence", "feelgomi", "omrbig", "baym", "adamjim", "ninautashiro", "vyralnet", "vitallikkolya", "anna_vrc", "man.vs.machine", "zackdfilms", "animix_cuts_", "nakigara1", "driiamusic", "sevi_iko_domochevsky", "nohamanfredi", "rinatbar80", "pamelaanderson", "ariel_nahary", "florence", "wassilychair", "yonatanwas", "dbcontre", "pierresnaps", "raphaelbliss", "madlena_shaman", "idanlaros", "charlottecardin", "ilu_birds", "anrealage_official", "pilienspain", "js.crib41", "imendonatsumi", "_snoofkin", "pushtlv", "grmnt.studio", "diploact.france", "noamroaky", "todaiijapanese", "underscores", "activereplication", "ryotaro_sato_", "klip_springer", "en_culture", "stevienicks", "udai65", "iamrealnene", "edo.nihongo.dojo", "emilydamari", "mirit_weinstock", "anita_falali", "japanese_rap_lyric", "regina.licious", "augustsai_", "caseymq", "karinkimel", "bishbash.il", "amirpashasadeh", "_studiovideo", "realassouline", "intranetvice", "haku___official", "danik.qm1", "suzu.hirose.official", "ebonyqueensheba", "yona_preminger", "thefigurehideout", "takashiifromjapan", "nikvsio", "ozenpill", "nana_mori_staff", "natsuki__deguchi__official", "y__suke24", "hanatsubakimag", "sh0tar0y", "creators", "yourgirl_summerhaze", "touchdesigner", "sushi__punch", "ai.designawards", "nhkworldjapan", "go_in_a_zigzag", "jxnjpn", "thisiscraves", "arkzai", "nakamafilm", "parallaxvp", "israelarchery", "to.be.fest", "metafordevelopers", "stewardstuff", "saya_japanese_lesson", "aikamoshita", "superrrdani", "shiny_lightzz", "nails___mayu", "lucy.cnc.china", "mago.studio.ai", "instasamka", "glgth", "johnyuyi", "antilatency", "war.p9", "auracles.io", "scanengine", "keren_makor", "aescripts", "raya", "max____studio", "shadrinsky", "kimura_yapanit", "aytekinyalcin", "fmfm00006", "moon_activewear_", "marco_di_lucca", "_brthr_", "vice3d", "nicolebounxe_tombraider", "torn_documentary", "shuhei.199431", "britneyspears", "boscoier", "elenadmpl", "itsaaac", "bakalaspain", "lachausseevtc", "aquarius", "samuelrcrane", "rutty07z", "_nick_skl", "sevyn0000", "bellamybellucci", "edendanielgabay", "sorbonne_univ", "troyesivan", "labsmoratiel", "lespetitsmitrons", "tabletmag", "749yc40rim2", "citedesartsparis", "okomeonigiriparis6", "parisik.cantine.coreenne", "victor_le_masne", "ronywan", "rues_paris", "leynalyons", "neneneoldu", "motif.jewelry", "gentlemonster", "patricedemailly", "chbruna17", "ding_wenjie678", "sophiefarsat", "marina.toledop", "r.gutgarts", "moamedbourouissa", "tom_kkemp", "jisooyoo64", "alextazya", "patrice_chazottes", "mathguillaume", "atlonormalit", "nanist", "as.approvedscience", "thedorbrothers", "mowalola", "raiki.yamamoto", "ezzzrrra", "zivcg", "yakupov.arw", "parkwood", "jenna___marsh", "douoleg", "iamaidinn", "ux.ui.dan", "13.0px", "fakeugcbygravity", "yohanan_gal", "yukichiba_", "erevshachor", "ofir.exe", "_benaor", "edenbachar", "meida_pnim", "koto9x", "tomtrasser", "shakedregev98", "ubisoft", "judith_lenglart", "daniel_rotem_margalit", "digital_media_tau", "ilyakreines", "shayleeatary", "dolev_amitai", "rubinam__", "tisff__", "ooo_yudaiono", "state_seas", "mariontkf", "pas2keur", "devonaoki", "howiseedat", "doopiidoo", "failing.fwd", "barbarabutch", "leparisien", "zeel_freel", "hezus.j", "britishmuseum", "saintcirelaxelle", "chongafied", "muah_youngju", "noargamani", "thejenniferjasonleigh", "reginedavid", "issalish", "yourjapaneseflashcards", "japansongsdaily", "context_learn", "solid__visual", "ketherynalore", "shrek", "konbini", "no.seter", "gilaandnancy", "oruayalon", "matancohengrumi", "milc_studio", "sasa.sensei", "celinedion", "69blex", "konami", "la_taliana", "cyann2o", "abra_now", "dearabra", "shantistieglitz", "ravid_kinori", "akinduzenofficial", "nztoys.namze", "charliedenis", "itsliorsart", "_yarin_didi", "lefresnoy", "ryuma_sato_", "benstiller", "roy_braun", "adikarnibridal", "avishalom.hasfari", "tclol2024", "musabi_koho", "kingcon2k11", "yvann_ba", "bombastosworld", "processx_official", "netflixgeeked", "j.lamotta.suzume", "barak.xyz", "lastartists", "sefkiibrahim", "yuyas.japanese.room", "hefez.hashud", "yotamano", "lilaq_logan98", "freya.leach", "dor", "simulon_", "idf", "jewishtalks", "aidanzamiri", "golaneden", "charli_xcx", "didired_returns", "quentin.deronzier", "standwithus", "belizekazi", "caitlynjenner", "sarahsommers.live", "idang121", "jasminmoallem", "gorlllach", "barak___cohen", "pitophee", "arianagrande", "screamsbeforesilence", "ai.with.glock", "marvelous_media_engine", "sapir_strul_", "aiwarper", "skullsqwat", "bafta", "suihankifufu", "hoop_dreamer", "deemostech", "miraimono", "anyma", "hide1956", "coach", "imma.gram", "japanesekohei", "aimprove.ai", "tokyo_highcosper_gourmet", "yuuuuto38", "liberxx0", "jennypenkin", "einatwilf", "retrocomputer_", "olivierkaczmarek", "michelleyeoh_official", "elad.be", "_mushroom_cafe_", "roibn", "heyheysergey", "dilara.baskoylu", "japanesepod101", "jordanribbans_", "liran.travel", "danielsannwald", "openaisora", "yoav__keren", "peterfilatov", "danantoni", "lo.memoman", "amitzookran", "paul.lahat", "yuvheff", "andrewpattee", "noas91", "thepacman82", "u2", "tomprez", "bli2s_", "ryota_togishi", "yehezkel_layoun", "ricorod", "yotaminute", "tohar_tutu", "danihendrikxx", "michserr", "yuliserfaty", "thisisnaomie", "shartiella.telescope", "natashashuma", "charlottegainsbourg", "mia_schem", "inner_reflections_ai", "enigmatic_e", "shartiella", "freedom__dancers", "the_mizrahi_archive", "metatailor_official", "noatishby", "the_aguda", "simamayost", "yamb0x.eth", "valeriehamaty", "kimkardashian", "lorenzo_cgi", "factsforpeace", "pink", "almosttoys", "neverforget6.30", "paloma_hugobardin", "weta_digital", "sachabaroncohen", "souad.massi", "memrireports", "amyschumer", "reginaspektor", "rachelraykay", "hapshutaofficial", "guakachu", "mrhyrum", "striplink_", "jeromebdw", "markrothko", "marvelousdesigner", "arntreal.co", "kevinjzprodigy", "ai.balder", "hellocivitai", "val_halla_82", "tokyojab", "tomgranov", "gvsgvs", "stuart_winecoff", "riccardo.aiff", "wetafxofficial", "noahcyrus", "sharon_e_rosenberg", "david_harush", "scopunny", "raphaelkohn", "unrealengine", "nils_bakker", "offglitchsystem", "yoni_geva", "anastasia_shoppe", "sophierachelattal", "durdur_e", "alxpstudio", "cardopusher", "luabyleax", "autodeskflowstudio", "solimanlopez", "noonoouri", "joergzuber", "dazedbeauty", "shin_rei_ii", "wethecoolstudio", "hardgrindhard", "janartpro", "allangregorio", "anhueso", "disorderange", "arleengzv", "donalleniii", "xrallstars", "raoulalejandre", "afrosquared", "keeator", "gamer_dump", "interactivestudio", "metasparky", "rachelbsavraham", "frederikheyman", "fixlauba", "priel_bensimon", "realityscanofficial", "lukehurd", "maykeul_corps", "theclawmodels", "auskaloren", "marcwakefieldards", "white_kevlar", "prlncl", "teamlab", "valentina1121li", "sagittabondus", "neohrc", "scan.thecity", "arielo0sh", "nitayouche", "lucadistanio", "scottodicarloantonio", "tempuramag", "isabelle.udo", "_____glassbambina_____", "kevinkriado", "alleyes0nb", "notawebsite", "arfluent", "pablo.sbhf", "ninwenano", "ayanakamura_officiel", "quentinrenaux", "irisvanherpen", "rotem_gerstel", "ded_avishur", "raquel_zimmermann", "inezandvinoodh", "krimpdaddy", "azaken50", "ilan_allana", "juliett_le", "motek80", "avitula"];

const listElement = document.getElementById('userList');
const counterElement = document.getElementById('counter');
const logArea = document.getElementById('logTextarea');
let GITHUB_TOKEN = localStorage.getItem('gh_token') || "";

// 1. Initial Load
async function init() {
    if (!GITHUB_TOKEN) {
        GITHUB_TOKEN = prompt("Enter GitHub Token (saved in browser only):");
        if (GITHUB_TOKEN) localStorage.setItem('gh_token', GITHUB_TOKEN);
    }
    await fetchProgress();
    document.getElementById('viewLogBtn').addEventListener('click', toggleLog);
    document.getElementById('closeLogBtn').addEventListener('click', toggleLog);
    document.getElementById('resetBtn').addEventListener('click', resetProgress);
}

// 2. Fetch data from GitHub API
async function fetchProgress() {
    if (!GITHUB_TOKEN) return renderList();
    try {
        const response = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`, {
            headers: { 'Authorization': `token ${GITHUB_TOKEN}` }
        });
        const data = await response.json();
        const content = JSON.parse(atob(data.content));
        Object.keys(content).forEach(key => localStorage.setItem(key, content[key]));
        renderList();
    } catch (e) {
        renderList();
    }
}

// 3. Write data to GitHub API
async function syncToGitHub() {
    if (!GITHUB_TOKEN) return;
    const syncData = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key !== 'gh_token') syncData[key] = localStorage.getItem(key);
    }
    const b64Content = btoa(JSON.stringify(syncData));
    try {
        const getFile = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`, {
            headers: { 'Authorization': `token ${GITHUB_TOKEN}` }
        });
        const fileData = await getFile.json();
        await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`, {
            method: 'PUT',
            headers: { 'Authorization': `token ${GITHUB_TOKEN}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: "Sync", content: b64Content, sha: fileData.sha })
        });
    } catch (e) { console.error(e); }
}

function renderList() {
    listElement.innerHTML = '';
    let count = 0;
    nonFollowers.forEach((name, index) => {
        const isDone = localStorage.getItem(`done-${name}`) === 'true';
        if (isDone) count++;
        const li = document.createElement('li');
        li.className = `user-item ${isDone ? 'completed' : ''}`;
        li.id = `row-${index}`;
        li.innerHTML = `<span class="username">${name}</span><div class="actions"><a href="https://instagram.com/${name}" target="_blank" class="btn-open">Open</a><input type="checkbox" ${isDone ? 'checked' : ''} onchange="handleToggle(this, '${name}')"></div>`;
        listElement.appendChild(li);
    });
    counterElement.innerText = `${count} / ${nonFollowers.length} Unfollowed`;
    updateLog();
}

function handleToggle(checkbox, name) {
    if (checkbox.checked) {
        localStorage.setItem(`done-${name}`, 'true');
        localStorage.setItem(`time-${name}`, new Date().toLocaleString());
    } else {
        localStorage.removeItem(`done-${name}`);
        localStorage.removeItem(`time-${name}`);
    }
    renderList();
    syncToGitHub();
}

function updateLog() {
    let history = [];
    nonFollowers.forEach(name => {
        const time = localStorage.getItem(`time-${name}`);
        if (time) history.push(`${time}: Unfollowed ${name}`);
    });
    logArea.value = history.length ? history.join('\n') : "No actions recorded.";
}

function toggleLog() {
    const log = document.getElementById('logSection');
    log.style.display = log.style.display === 'none' ? 'block' : 'none';
}

function resetProgress() {
    if(confirm("Reset everything?")) {
        const token = localStorage.getItem('gh_token');
        localStorage.clear();
        localStorage.setItem('gh_token', token);
        renderList();
        syncToGitHub();
    }
}

init();
