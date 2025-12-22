// --- CONFIGURATION ---
const REPO_OWNER = "rbs250"; 
const REPO_NAME = "ranchukInsta";         
const FILE_PATH = "data.json";
// ---------------------

// CORRECTED LIST: Exactly 184 accounts (No ehud_yis, hlwoolf, or other mutuals)
const nonFollowers = ["fashionpierrebog", "bea_fiedler", "eladshenhav", "yangmunus", "yonatanwachs", "timm_signature", "tomerpetael", "benxphoto", "yuliaplotkinoz", "mustafa3adel", "itay_yatz", "snirdvashh", "ilaidov", "emilislamoglu", "michaelehlersnyc", "shaharmichaeli58", "marcel_schlutt", "kaltblut_magazine", "tal_grushka", "zohar.isaac", "lo.taim", "moshe_sasson", "nathanael.sanna", "mmmmssssquall", "amazingtubetimelapse", "israelenfrancais", "leave_yuli_alone", "trainer_emun", "dipprrrrrrrrrrrr", "kohi.tlv", "olivernordin1", "voidstomper", "perfectly.imperfekt", "thataipage", "yaelala", "klingai_official", "theo_sound", "shelishnider", "analog.it", "yuval_tebol", "figa.link", "sonnowon", "yuruhan_", "projecttlv", "country.life.vlog", "550am", "bobaz.lobster", "galiberman97", "lightricks_life", "ippodotea", "oao_footwear", "liz_y2k", "alexbabycakes", "qoves", "balabarprince", "livdelestal", "lilyallen", "yonatanbary", "dollydoesvlogs", "ivankatrump", "tomahscandles", "plovtandursamsa", "ohneis652", "itssidders", "the.shem.tv", "noa_yehu", "eliana.sachs", "applemartin", "bar__paradiso", "v4studio", "belenaguilera", "fab", "ron_spam_", "acostaeliann", "dollyparton", "ionnalee", "zicksworld", "cappucci_hair_milan_", "yoelbenharrouche", "medalgamexclawcrane", "krumbletv", "greenlight_physiocare", "rachelkleiman1", "vivllainous", "igorptash", "nickiminaj", "heyglif", "japaninisrael", "lemondefr", "arabeska_talpiot_restaurant", "juliensebbag", "coloringxgirlx", "raheli", "iamronki", "aige_in", "ijnej", "megumiraar", "sophiet", "eilam_cna", "taoagou", "jj.jj.7", "swank.mami", "katzuniz", "ichikoaoba", "eyalgever", "soyyterra", "danielobadiah", "leysoulmusic", "niv_sudai", "dinperlis", "icysaw", "realdex999", "kokoshkapino", "holotx", "arturs.li", "reiki.77", "quimfabregas", "a.latinopoulou", "goldieboutilier", "noashealthybites", "tanyad_real", "miripaskal", "danainternational", "girafa.studio", "letsdsomething", "buildersofmideast", "cydneewithac", "sixsex_bb", "offernissimofficial", "melkiaur", "benjaminbenichoustudio", "azealiabanksforever", "brazyybih", "beatfoot", "theoddanimalspecimens", "yonatan_honig", "nshnv", "vickie_cherie", "cinematographydb", "fbbgrowth", "treger_man", "drorkalir", "thegirljt", "majestuale", "holymariai", "beds_1", "palmistry_globe", "smartdesign.nyc", "windows", "uon.visuals", "quinnwtf_", "memphy", "carcymagazine", "morenaoficial", "gu_for_all_", "okkeijapanese", "lanuitamericaine", "hey4ro", "mujde.official", "kompromatmusic", "f2max_intelligence", "feelgomi", "omrbig", "baym", "adamjim", "ninautashiro", "vyralnet", "vitallikkolya", "anna_vrc", "man.vs.machine", "zackdfilms", "animix_cuts_", "nakigara1", "driiamusic", "pamelaanderson", "ariel_nahary", "florence", "wassilychair", "pierresnaps", "raphaelbliss", "madlena_shaman", "charlottecardin", "ilu_birds", "anrealage_official", "pilienspain", "js.crib41", "imendonatsumi", "_snoofkin", "pushtlv", "grmnt.studio", "diploact.france", "noamroaky", "todaiijapanese", "underscores", "activereplication", "ryotaro_sato_", "klip_springer", "en_culture", "stevienicks", "udai65", "iamrealnene", "edo.nihongo.dojo", "emilydamari", "mirit_weinstock", "anita_falali", "japanese_rap_lyric", "augustsai_", "caseymq", "karinkimel", "bishbash.il", "amirpashasadeh", "_studiovideo", "realassouline", "intranetvice", "haku___official", "danik.qm1", "suzu.hirose.official", "ebonyqueensheba", "yona_preminger", "thefigurehideout", "takashiifromjapan", "nikvsio", "nana_mori_staff", "natsuki__deguchi__official", "y__suke24", "hanatsubakimag", "sh0tar0y", "zanagotex", "creators", "yourgirl_summerhaze", "touchdesigner", "sushi__punch", "ai.designawards", "nhkworldjapan", "jxnjpn", "thisiscraves", "arkzai", "nakamafilm", "parallaxvp", "israelarchery", "to.be.fest", "metafordevelopers", "stewardstuff", "saya_japanese_lesson", "aikamoshita", "superrrdani", "shiny_lightzz", "nails___mayu", "lucy.cnc.china", "mago.studio.ai", "instasamka", "glgth", "johnyuyi", "antilatency", "war.p9", "auracles.io", "scanengine", "aescripts", "raya", "max____studio", "shadrinsky", "kimura_yapanit", "aytekinyalcin", "fmfm00006", "moon_activewear_", "jjamesc", "marco_di_lucca", "_brthr_", "vice3d", "nicolebounxe_tombraider", "torn_documentary", "shuhei.199431", "boscoier", "bakalaspain", "aquarius", "samuelrcrane", "rutty07z", "sevyn0000", "bellamybellucci", "edendanielgabay", "sorbonne_univ", "troyesivan", "labsmoratiel", "lespetitsmitrons", "tabletmag", "citedesartsparis", "okomeonigiriparis6", "parisik.cantine.coreenne", "victor_le_masne", "ronywan", "rues_paris", "leynalyons", "neneneoldu", "motif.jewelry", "gentlemonster", "patricedemailly", "chbruna17", "ding_wenjie678", "moamedbourouissa", "tom_kkemp", "jisooyoo64", "alextazya", "mathguillaume", "atlonormalit", "nanist", "as.approvedscience", "thedorbrothers", "mowalola", "raiki.yamamoto", "ezzzrrra", "zivcg", "yakupov.arw", "parkwood", "jenna___marsh", "iamaidinn", "ux.ui.dan", "13.0px", "fakeugcbygravity", "yohanan_gal", "yukichiba_", "erevshachor", "meida_pnim", "tomtrasser", "ubisoft", "digital_media_tau", "shayleeatary", "miripaskal", "amichai_sheetrit", "girafa.studio", "letsdsomething", "buildersofmideast", "offglitchsystem", "yoni_geva", "anastasia_shoppe", "sophierachelattal", "alxpstudio", "cardopusher", "luabyleax", "autodeskflowstudio", "solimanlopez", "noonoouri", "joergzuber", "dazedbeauty", "shin_rei_ii", "wethecoolstudio", "hardgrindhard", "janartpro", "allangregorio", "anhueso", "disorderange", "arleengzv", "donalleniii", "xrallstars", "raoulalejandre", "keeator", "gamer_dump", "interactivestudio", "metasparky", "rachelbsavraham", "frederikheyman", "fixlauba", "priel_bensimon", "realityscanofficial", "lukehurd", "maykeul_corps", "theclawmodels", "auskaloren", "marcwakefieldards", "white_kevlar", "prlncl", "teamlab", "valentina1121li", "sagittabondus", "neohrc", "scan.thecity", "arielo0sh", "nitayouche", "lucadistanio", "scottodicarloantonio", "tempuramag", "isabelle.udo", "_____glassbambina_____", "kevinkriado", "alleyes0nb", "notawebsite", "arfluent", "pablo.sbhf", "ninwenano", "ayanakamura_officiel", "quentinrenaux", "irisvanherpen", "rotem_gerstel", "ded_avishur", "raquel_zimmermann", "inezandvinoodh", "krimpdaddy"];

const listElement = document.getElementById('userList');
const counterElement = document.getElementById('counter');
const logArea = document.getElementById('logTextarea');
let GITHUB_TOKEN = localStorage.getItem('gh_token') || "";

async function init() {
    if (!GITHUB_TOKEN) {
        GITHUB_TOKEN = prompt("Enter GitHub Token (will be saved in browser memory):");
        if (GITHUB_TOKEN) localStorage.setItem('gh_token', GITHUB_TOKEN);
    }
    await fetchProgress();
    document.getElementById('viewLogBtn').addEventListener('click', toggleLog);
    document.getElementById('closeLogBtn').addEventListener('click', toggleLog);
    document.getElementById('resetBtn').addEventListener('click', resetProgress);
}

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
