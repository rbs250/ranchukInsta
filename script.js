// --- CONFIGURATION ---
const REPO_OWNER = "YOUR_GITHUB_USERNAME"; // <--- CHANGE THIS
const REPO_NAME = "insta-cleanup";         // <--- CHANGE THIS
const FILE_PATH = "data.json";
// ---------------------

const nonFollowers = ["fashionpierrebog", "bea_fiedler", "eladshenhav", "yangmunus", "yonatanwachs", "timm_signature", "tomerpetael", "benxphoto", "yuliaplotkinoz", "ehud_yis", "oriiz10", "hlwoolf", "roy_oren_", "mustafa3adel", "lior.azar", "itay_yatz", "snirdvashh", "ilaidov", "emilislamoglu", "kikogalvez", "michaelehlersnyc", "shaharmichaeli58", "marcel_schlutt", "kaltblut_magazine", "tal_grushka", "_mayul__", "zohar.isaac", "lo.taim", "moshe_sasson", "nadav.eliyahu", "nathanael.sanna", "mmmmssssquall", "amazingtubetimelapse", "israelenfrancais", "joshuabrook", "leave_yuli_alone", "keagan_ramsamy", "trainer_emun", "dipprrrrrrrrrrrr", "kohi.tlv", "olivernordin1", "misskol", "voidstomper", "perfectly.imperfekt", "thataipage", "yaelala", "klingai_official", "theo_sound", "gilad_blustein", "noa_yafe", "shelishnider", "analog.it", "yuval_tebol", "figa.link", "balder.ai", "kive.ai", "yinsohyun", "0.17mel", "sonnowon", "yuruhan_", "projecttlv", "country.life.vlog", "550am", "daniel.tubul_", "rotembanet", "bobaz.lobster", "galiberman97", "lightricks_life", "nnoacohenn", "ippodotea", "oao_footwear", "liz_y2k", "besir.ahad", "alexbabycakes", "qoves", "balabarprince", "livdelestal", "andres07ar", "lilyallen", "mykindof_guy", "yonatanbary", "dollydoesvlogs", "ivankatrump", "tomahscandles", "plovtandursamsa", "ohneis652", "itssidders", "the.shem.tv", "noa_yehu", "eliana.sachs", "applemartin", "bar__paradiso", "v4studio", "belenaguilera", "fab", "ron_spam_", "acostaeliann", "dollyparton", "sleepyfragments", "ionnalee", "maayanstrul", "zicksworld", "cappucci_hair_milan_", "yoelbenharrouche", "medalgamexclawcrane", "krumbletv", "yairbenharrouche", "semek_creative_house", "_nadav.shacham", "greenlight_physiocare", "rachelkleiman1", "may_self_official", "vivllainous", "igorptash", "nickiminaj", "heyglif", "japaninisrael", "lemondefr", "arabeska_talpiot_restaurant", "juliensebbag", "coloringxgirlx", "raheli", "iamronki", "aige_in", "pierredemilly", "ijnej", "papafitgym", "fortunalabz", "roi.perl", "miss_hypnotic_", "megumiraar", "sophiet", "eilam_cna", "taoagou", "einish108", "jj.jj.7", "benjipoirier", "swank.mami", "katzuniz", "ichikoaoba", "eyalgever", "irad", "soyyterra", "danielobadiah", "comfyui", "leysoulmusic", "niv_sudai", "dinperlis", "arie_ben_harosh", "icysaw", "realdex999", "kokoshkapino", "daniellshoshani", "holotx", "noagabay_makeup", "nimroda", "ozyajami", "r0sl4n2k1ll", "arturs.li", "lisa_akrish", "valentinherfray", "reiki.77", "quimfabregas", "a.latinopoulou", "coraline.zorea", "yaroslover_", "ariecro", "alon_shamash", "goldi.lux_", "vincentchaillet", "ofir.ai", "udi_knebel", "morpe", "tal_katzav_1", "eitankurtz", "sababafive", "floating_riri", "nuggetsslut", "daniel.rubinshtein", "amitymiyabi", "new_eggofficial", "adamex8bit", "amitgadassi", "v__i__e__l", "goldieboutilier", "vanunujazz", "tal_huga", "drorvaknin", "noashealthybites", "tanyad_real", "isco26.official", "dr_daniel_dorfman", "three.times.five._", "miripaskal", "talyadmoni", "naor.daniel", "sagidahary", "kobyhasson_", "maayankrn", "that.itai", "samlavy", "fuuuckingran", "saharmessika", "izikaa", "tai_______x", "dekel_w", "harryhalim", "amichai_sheetrit", "danainternational", "girafa.studio", "danageva90", "liav_rivlin", "mrsadan", "letsdsomething", "buildersofmideast", "elad_atrakchi", "noarotenberg__", "cydneewithac", "sixsex_bb", "offernissimofficial", "karen_abs", "idoshkuri", "nadavmusai", "melkiaur", "benjaminbenichoustudio", "azealiabanksforever", "loictrouche", "brazyybih", "beatfoot", "noiarkobi_photographer", "theoddanimalspecimens", "yonatan_honig", "omrimilstein", "nshnv", "misssssstaken", "assafkatz1", "vickie_cherie", "cinematographydb", "yuval_borodati", "abelpprz", "itay_taa", "adirjo", "jerusalem.beach", "fbbgrowth", "treger_man", "drorkalir", "yossi1987", "thegirljt", "awe_wa_", "notblankadam", "shahaf_____________", "majestuale", "jesseskay", "holymariai", "beds_1", "guy__bar", "palmistry_globe", "david_kuzminsky", "mhoscheidt", "smartdesign.nyc", "windows", "uon.visuals", "quinnwtf_", "memphy", "gili.cohen__", "nona_chalant", "carcymagazine", "shlomishlomo_", "morenaoficial", "imjuanro", "matansk", "astria_ai", "davidchersky35", "yrbsi", "gu_for_all_", "yousefkhano", "tstrn", "moshev", "yossefbudagov", "okkeijapanese", "artamam_art", "evyatar_myor", "taliachetrit", "roie3600", "ron.klimovsky", "wooooof_com", "moshebiran", "lanuitamericaine", "hey4ro", "nitay_hershko97", "mujde.official", "kompromatmusic", "f2max_intelligence", "feelgomi", "omrbig", "baym", "adamjim", "ninautashiro", "dekel_harpaz", "matteomoreno__", "vlad.fradlin", "vyralnet", "justaroundthe.bend", "itay_hacker", "vitallikkolya", "tomerpalm", "anna_vrc", "bat7gedy", "man.vs.machine", "zackdfilms", "animix_cuts_", "nakigara1", "driiamusic", "sevi_iko_domochevsky", "nohamanfredi", "rinatbar80", "pamelaanderson", "ariel_nahary", "florence", "wassilychair", "stacyplaza", "jmartinovic", "tomeralmoznino", "yonatanwas", "dbcontre", "rroyrosen", "pierresnaps", "michaelbenayonofficial", "raphaelbliss", "madlena_shaman", "idanlaros", "charlottecardin", "lironlevy4", "ilu_birds", "dorzip", "anrealage_official", "pilienspain", "js.crib41", "yuval_shatz", "imendonatsumi", "_snoofkin", "neetays", "ron_omid", "pushtlv", "grmnt.studio", "giladgreenwald", "diploact.france", "noamroaky", "todaiijapanese", "reutcass", "underscores", "activereplication", "ryotaro_sato_", "gabay_ido_", "klip_springer", "en_culture", "voguejapan", "stevienicks", "udai65", "iamrealnene", "edo.nihongo.dojo", "emilydamari", "mirit_weinstock", "ceciliadray", "anita_falali", "japanese_rap_lyric", "regina.licious", "augustsai_", "caseymq", "tomat.erra", "karinkimel", "liorshneor", "metoxsss", "bishbash.il", "amirpashasadeh", "_studiovideo", "laracroft_magazine", "realassouline", "omrita__", "eitan_tal", "shay_shaz", "intranetvice", "haku___official", "danik.qm1", "shlomikandil", "elsl2025", "suzu.hirose.official", "ebonyqueensheba", "hamad_sharoof", "yona_preminger", "viceassouline", "thefigurehideout", "takashiifromjapan", "nikvsio", "ozenpill", "nana_mori_staff", "natsuki__deguchi__official", "y__suke24", "hanatsubakimag", "sh0tar0y", "avivshrikii", "zanagotex", "creators", "yourgirl_summerhaze", "touchdesigner", "sushi__punch", "ai.designawards", "nhkworldjapan", "go_in_a_zigzag", "jxnjpn", "thisiscraves", "arkzai", "nakamafilm", "parallaxvp", "israelarchery", "i.make.3d", "to.be.fest", "metafordevelopers", "stewardstuff", "saya_japanese_lesson", "seeing_itself", "aikamoshita", "bokershachor", "superrrdani", "shiny_lightzz", "nails___mayu", "mago.studio.ai", "instasamka", "glgth", "adinu", "johnyuyi", "antilatency", "war.p9", "vicmaltz", "auracles.io", "uria_arazi", "aiwizzz", "scanengine", "ido_harti", "keren_makor", "zoock", "aescripts", "raya", "max____studio", "shadrinsky", "kimura_yapanit", "marlonmarlymarvin", "aytekinyalcin", "bnsymvnbny", "moria_muharer", "fmfm00006", "moon_activewear_", "jjamesc", "marco_di_lucca", "_brthr_", "vice3d", "nicolebounxe_tombraider", "kerenettinger", "torn_documentary", "shuhei.199431", "britneyspears", "boscoier", "elenadmpl", "itsaaac", "bakalaspain", "lachausseevtc", "aquarius", "samuelrcrane", "rutty07z", "_nick_skl", "sevyn0000", "bellamybellucci", "edendanielgabay", "sorbonne_univ", "troyesivan", "lll012793", "labsmoratiel", "lespetitsmitrons", "tabletmag", "749yc40rim2", "citedesartsparis", "okomeonigiriparis6", "parisik.cantine.coreenne", "masters_david", "victor_le_masne", "ronywan", "rues_paris", "wassles", "glitterdayz", "leynalyons", "breannacastro", "joberg_coaching", "yassineth", "neneneoldu", "hadarcohenp", "motif.jewelry", "mikapaz1", "gentlemonster", "patricedemailly", "chbruna17", "ding_wenjie678", "sophiefarsat", "marina.toledop", "r.gutgarts", "mohamedbourouissa", "tom_kkemp", "jisooyoo64", "ania_biriulina", "alextazya", "patrice_chazottes", "mathguillaume", "yalla.gila", "mehmetkartal__", "atlonormalit", "nanist", "as.approvedscience", "thedorbrothers", "mowalola", "raiki.yamamoto", "ezzzrrra", "zivcg", "yakupov.arw", "parkwood", "jenna___marsh", "douoleg", "iamaidinn", "ux.ui.dan", "13.0px", "fakeugcbygravity", "yohanan_gal", "yukichiba_", "mypicklestudio", "erevshachor", "ofir.exe", "_benaor", "edenbachar", "meida_pnim", "koto9x", "tomtrasser", "shakedregev98", "ubisoft", "judith_lenglart", "daniel_rotem_margalit", "digital_media_tau", "ilyakreines", "shayleeatary", "dolev_amitai", "rubinam__", "tisff__", "ooo_yudaiono", "me_who_will_be", "state_seas", "francescobarba94", "shimrit_eldis", "itai.ha", "195cc", "orkaim2020", "k.fi.r", "mariontkf", "pas2keur", "vulcainlechien", "devonaoki", "howiseedat", "pelegse", "doopiidoo", "bach_withyaeli", "failing.fwd", "barbarabutch", "leparisien", "zeel_freel", "hezus.j", "britishmuseum", "saintcirelaxelle", "chongafied", "muah_youngju", "noargamani", "thejenniferjasonleigh", "reginedavid", "issalish", "yourjapaneseflashcards", "japansongsdaily", "context_learn", "solid__visual", "ketherynalore", "shrek", "konbini", "no.seter", "gilaandnancy", "oruayalon", "matancohengrumi", "milc_studio", "sasa.sensei", "celinedion", "69blex", "konami", "la_taliana", "cyann2o", "abra_now", "dearabra", "shantistieglitz", "ravid_kinori", "akinduzenofficial", "nztoys.namze", "charliedenis", "itsliorsart", "_yarin_didi", "lefresnoy", "ryuma_sato_", "benstiller", "roy_braun", "adikarnibridal", "avishalom.hasfari", "tclol2024", "musabi_koho", "kingcon2k11", "yvann_ba", "bombastosworld", "processx_official", "netflixgeeked", "j.lamotta.suzume", "barak.xyz", "lastartists", "sefkiibrahim", "yuyas.japanese.room", "hefez.hashud", "yotamano", "lilaq_logan98", "freya.leach", "dor", "simulon_", "idf", "aidanzamiri", "golaneden", "charli_xcx", "didired_returns", "quentin.deronzier", "standwithus", "belizekazi", "caitlynjenner", "sarahsommers.live", "jasminmoallem", "barak___cohen", "pitophee", "screamsbeforesilence", "ai.with.glock", "nsstagram", "iasonc90", "marvelous_media_engine", "sapir_strul_", "aiwarper", "matanfink", "__deleted__bhiebefhefeabegbj", "naor.zada", "skullsqwat", "taaaaaiju", "bafta", "suihankifufu", "hoop_dreamer", "deemostech", "miraimono", "anyma", "hide1956", "coach", "imma.gram", "japanesekohei", "aimprove.ai", "tokyo_highcosper_gourmet", "yuuuuto38", "liberxx0", "jennypenkin", "einatwilf", "retrocomputer_", "olivierkaczmarek", "michelleyeoh_official", "elad.be", "_mushroom_cafe_", "roibn", "heyheysergey", "dilara.baskoylu", "japanesepod101", "danielsannwald", "openaisora", "lo.memoman", "andrewpattee", "thepacman82", "bli2s_", "ryota_togishi", "yehezkel_layoun", "ricorod", "yotaminute", "tohar_tutu", "danihendrikxx", "michserr", "yuliserfaty", "thisisnaomie", "shartiella.telescope", "natashashuma", "charlottegainsbourg", "mia_schem", "inner_reflections_ai", "enigmatic_e", "shartiella", "freedom__dancers", "the_mizrahi_archive", "metatailor_official", "noatishby", "the_aguda", "simamayost", "yamb0x.eth", "valeriehamaty", "kimkardashian", "lorenzo_cgi", "factsforpeace", "pink", "almosttoys", "neverforget6.30", "paloma_hugobardin", "weta_digital", "sachabaroncohen", "souad.massi", "memrireports", "amyschumer", "reginaspektor", "rachelraykay", "hapshutaofficial", "guakachu", "mrhyrum", "striplink_", "jeromebdw", "markrothko", "marvelousdesigner", "arntreal.co", "kevinjzprodigy", "ai.balder", "hellocivitai", "val_halla_82", "tokyojab", "tomgranov", "gvsgvs", "stuart_winecoff", "riccardo.aiff", "wetafxofficial", "noahcyrus", "sharon_e_rosenberg", "david_harush", "scopunny", "raphaelkohn", "unrealengine", "nils_bakker", "offglitchsystem", "yoni_geva", "anastasia_shoppe", "sophierachelattal", "durdur_e", "alxpstudio", "cardopusher", "luabyleax", "autodeskflowstudio", "solimanlopez", "noonoouri", "joergzuber", "dazedbeauty", "shin_rei_ii", "wethecoolstudio", "hardgrindhard", "janartpro", "allangregorio", "anhueso", "disorderange", "arleengzv", "donalleniii", "xrallstars", "raoulalejandre", "afrosquared", "keeator", "gamer_dump", "interactivestudio", "metasparky", "rachelbsavraham", "frederikheyman", "fixlauba", "priel_bensimon", "realityscanofficial", "lukehurd", "maykeul_corps", "theclawmodels", "auskaloren", "marcwakefieldards", "white_kevlar", "prlncl", "teamlab", "valentina1121li", "sagittabondus", "neohrc", "scan.thecity", "arielo0sh", "nitayouche", "lucadistanio", "scottodicarloantonio", "tempuramag", "isabelle.udo", "_____glassbambina_____", "kevinkriado", "alleyes0nb", "notawebsite", "arfluent", "pablo.sbhf", "ninwenano", "ayanakamura_officiel", "quentinrenaux", "irisvanherpen", "rotem_gerstel", "ded_avishur", "raquel_zimmermann", "inezandvinoodh", "krimpdaddy", "azaken50", "ilan_allana", "juliett_le", "motek80", "avitula"];

const listElement = document.getElementById('userList');
const counterElement = document.getElementById('counter');
let GITHUB_TOKEN = localStorage.getItem('gh_token') || "";

// 1. Initial Load
async function init() {
    // If no token exists, ask for it once
    if (!GITHUB_TOKEN) {
        GITHUB_TOKEN = prompt("Enter GitHub Token to sync progress (this stays in your browser memory only):");
        if (GITHUB_TOKEN) localStorage.setItem('gh_token', GITHUB_TOKEN);
    }

    // Load from GitHub first
    await fetchProgress();

    // Setup UI buttons
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
        
        // Merge GitHub data into your browser's memory
        Object.keys(content).forEach(key => localStorage.setItem(key, content[key]));
        renderList();
    } catch (e) {
        console.log("Starting fresh or failed to reach GitHub.");
        renderList();
    }
}

// 3. Write data to GitHub API
async function syncToGitHub() {
    if (!GITHUB_TOKEN) return;

    // Create a data object to save (excluding the token itself)
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
            headers: {
                'Authorization': `token ${GITHUB_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: "Sync progress",
                content: b64Content,
                sha: fileData.sha
            })
        });
        console.log("GitHub Sync Successful");
    } catch (e) {
        console.error("GitHub Sync Failed:", e);
    }
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
        li.innerHTML = `
            <span class="username">${name}</span>
            <div class="actions">
                <a href="https://instagram.com/${name}" target="_blank" class="btn-open">Open</a>
                <input type="checkbox" ${isDone ? 'checked' : ''} onchange="handleToggle(this, '${name}')">
            </div>
        `;
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
    document.getElementById('logTextarea').value = history.length ? history.join('\n') : "No actions recorded.";
}

function toggleLog() {
    const log = document.getElementById('logSection');
    log.style.display = log.style.display === 'none' ? 'block' : 'none';
}

function resetProgress() {
    if(confirm("Reset progress? This wipes the local log and GitHub data.")) {
        const token = localStorage.getItem('gh_token');
        localStorage.clear();
        localStorage.setItem('gh_token', token);
        renderList();
        syncToGitHub();
    }
}

init();