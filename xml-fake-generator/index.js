const builder = require("xmlbuilder");
const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "__data__");
console.log(dataFolder);

const users = [
  "madenot0",
  "pgiggie1",
  "asamett2",
  "drawes3",
  "dgamwell4",
  "sbushby5",
  "pmcgilbon6",
  "dbrettor7",
  "gkiff8",
  "fbaillie9",
  "bcellera",
  "tsharplesb",
  "haujouanetc",
  "hmaiord",
  "epainswicke",
  "hstimpsonf",
  "sbattelleg",
  "kferraraccioh",
  "gkifti",
  "aholdinj",
  "ctooheyk",
  "cstauntonl",
  "abenwellm",
  "hcatheln",
  "nsteelo",
  "cdoriep",
  "tdovermannq",
  "jtynanr",
  "edanigels",
  "dkarpfent",
  "jcallicottu",
  "mberlingv",
  "alydiattw",
  "ecrunkhurnx",
  "ycrombleholmey",
  "dpenniniz",
  "mpilsbury10",
  "pvedntyev11",
  "bleworthy12",
  "sblunkett13",
  "asansbury14",
  "bsignori15",
  "lbarnhill16",
  "cnollet17",
  "skeyho18",
  "osimeons19",
  "cbullocke1a",
  "vraun1b",
  "dbrainsby1c",
  "dmcomish1d",
  "eyitzovitz1e",
  "ubortoletti1f",
  "farran1g",
  "eciraldo1h",
  "aprestidge1i",
  "fkinde1j",
  "ipimerick1k",
  "bscoggin1l",
  "fmucillo1m",
  "ctabert1n",
  "acoggell1o",
  "iroxby1p",
  "mibarra1q",
  "npalk1r",
  "ekenaway1s",
  "wtreace1t",
  "kengelbrecht1u",
  "aaltree1v",
  "svollam1w",
  "gmcinnerny1x",
  "jlivzey1y",
  "cosbaldstone1z",
  "dvidler20",
  "rsillwood21",
  "tboord22",
  "sbaptist23",
  "mwhitehurst24",
  "nsthill25",
  "mgot26",
  "amcglew27",
  "mdeath28",
  "dhedney29",
  "emaltby2a",
  "czapatero2b",
  "brosendahl2c",
  "rvaleri2d",
  "rjoliffe2e",
  "csacher2f",
  "dbumphries2g",
  "mobrollachain2h",
  "acathcart2i",
  "ijandourek2j",
  "bhaskell2k",
  "oeagleston2l",
  "yspragge2m",
  "nbarnett2n",
  "dchagg2o",
  "clisciandri2p",
  "cmcilwaine2q",
  "tibbotson2r",
  "wmathelon2s",
  "bsallarie2t",
  "wwakely2u",
  "mkirsche2v",
  "ryaakov2w",
  "hbewshea2x",
  "dmacgilrewy2y",
  "gcrotch2z",
  "vsmidmore30",
  "mturone31",
  "lyushkov32",
  "kmillan33",
  "frogliero34",
  "lfairlaw35",
  "kkingsley36",
  "bboman37",
  "mguerreau38",
  "sluto39",
  "rlindermann3a",
  "aoury3b",
  "dochterlony3c",
  "aquested3d",
  "ddy3e",
  "dchingedehals3f",
  "lvickars3g",
  "ilace3h",
  "mwillder3i",
  "khounsome3j",
  "afoulger3k",
  "jcrossan3l",
  "mbutchard3m",
  "lsellers3n",
  "gwrixon3o",
  "ewestern3p",
  "dgillani3q",
  "mtalks3r",
  "egalbreath3s",
  "gstennes3t",
  "kbonds3u",
  "aminors3v",
  "geyckel3w",
  "rrizzetti3x",
  "pkempson3y",
  "dmoulding3z",
  "ccallway40",
  "mkynston41",
  "sluca42",
  "rceaplen43",
  "tskinn44",
  "bselburn45",
  "afahy46",
  "cmattityahou47",
  "mmontier48",
  "obraunlein49",
  "disacke4a",
  "rgosnell4b",
  "yfreeman4c",
  "cpithie4d",
  "oallmond4e",
  "ljonah4f",
  "hconley4g",
  "cfoad4h",
  "dskirvin4i",
  "dingram4j",
  "ebamborough4k",
  "ahockell4l",
  "ecleobury4m",
  "eclimo4n",
  "dengelmann4o",
  "hcamus4p",
  "bdeakan4q",
  "mliptrod4r",
  "cfessier4s",
  "dsackey4t",
  "churkett4u",
  "gwiffler4v",
  "dksandra4w",
  "dmather4x",
  "wmephan4y",
  "cgrove4z",
  "cbeagrie50",
  "ajenner51",
  "dyuryatin52",
  "fmoncreiffe53",
  "abarkway54",
  "lkildea55",
  "tgilardoni56",
  "rarend57",
  "ddewhurst58",
  "jbruckner59",
  "dgierck5a",
  "wedgington5b",
  "mgrinov5c",
  "jseery5d",
  "kdeortega5e",
  "abeinke5f",
  "cturbitt5g",
  "njeckell5h",
  "jvasnetsov5i",
  "ekynnd5j",
  "ybourges5k",
  "dbartlomiejczyk5l",
  "kworman5m",
  "kbollard5n",
  "ademann5o",
  "jworsfold5p",
  "akull5q",
  "jetchell5r",
  "ehaylock5s",
  "mcosgreave5t",
  "apinchen5u",
  "cmashal5v",
  "bholdron5w",
  "olecount5x",
  "ocord5y",
  "osissot5z",
  "mesp60",
  "mdeshorts61",
  "dtrevallion62",
  "jdongles63",
  "vbendixen64",
  "dstrotton65",
  "dhurdis66",
  "vsunter67",
  "pscutchin68",
  "mokill69",
  "ihoulworth6a",
  "mbreit6b",
  "icorneille6c",
  "rtenpenny6d",
  "apocklington6e",
  "aberanek6f",
  "ccamosso6g",
  "alehr6h",
  "dreightley6i",
  "mramsell6j",
  "gboutton6k",
  "epemberton6l",
  "atratton6m",
  "wstrathdee6n",
  "kgeleman6o",
  "dlatek6p",
  "ccomoletti6q",
  "dcaudelier6r",
  "cwherton6s",
  "rlefever6t",
  "bsleightholme6u",
  "etregunnah6v",
  "npotteril6w",
  "dgarnul6x",
  "vaves6y",
  "sfrancescuzzi6z",
  "tlorens70",
  "lchaves71",
  "dmaundrell72",
  "dfulle73",
  "tgrimsey74",
  "gmattingson75",
  "lreagan76",
  "bhoyland77",
  "rbent78",
  "hschofield79",
  "wbengochea7a",
  "lzammett7b",
  "gbeau7c",
  "panand7d",
  "bcumbridge7e",
  "cbillie7f",
  "dolman7g",
  "mmacanulty7h",
  "fturvey7i",
  "lstotherfield7j",
  "keverleigh7k",
  "dkupisz7l",
  "jclardge7m",
  "nduer7n",
  "sbrito7o",
  "ncartlidge7p",
  "semlin7q",
  "bbuttery7r",
  "esobczak7s",
  "bassard7t",
  "rvardey7u",
  "wbalhatchet7v",
  "bjosef7w",
  "mgoode7x",
  "wprahm7y",
  "mrilston7z",
  "ccolafate80",
  "fwalpole81",
  "bcooch82",
  "jblakes83",
  "taizik84",
  "lanthill85",
  "srogans86",
  "bmurra87",
  "bsalandino88",
  "ssharrock89",
  "khousley8a",
  "gpernell8b"
];

const jobTypes = ["print", "scan", "copy"];

const ipAddresses = [
  "161.228.58.113",
  "102.85.96.219",
  "188.114.206.125",
  "245.160.20.58",
  "73.204.31.211",
  "138.7.30.240",
  "236.79.97.64",
  "186.215.208.174",
  "49.198.224.222",
  "14.169.218.12",
  "111.248.145.76",
  "1.220.172.121",
  "5.55.9.77",
  "53.201.154.38",
  "59.207.240.72",
  "223.143.215.32",
  "105.64.242.67",
  "51.3.8.66",
  "207.242.155.89",
  "238.159.240.130",
  "172.80.17.79",
  "27.9.12.36",
  "183.112.26.222",
  "254.79.87.87",
  "198.31.177.44",
  "249.151.35.96",
  "15.214.45.37",
  "97.43.238.34",
  "243.149.155.44",
  "252.62.106.86"
];

const random = {
  index: (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  date: () => {
    const start = new Date(2017, 0, 1);
    const end = new Date();
    const date = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return date
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
  },
  username: () => {
    const usersLength = users.length;
    const randomIndex = random.index(0, users.length);
    return users[randomIndex];
  },
  jobType: () => {
    const randomIndex = random.index(0, jobTypes.length);
    return jobTypes[randomIndex];
  },
  ipAddress: () => {
    const randomIndex = random.index(0, ipAddresses.length);
    return ipAddresses[randomIndex];
  }
};

const generateJobObject = fileIndex => ({
  data: {
    timestamp: random.date(),
    username: random.username(),
    jobType: random.jobType(),
    serverName: "SRV-MYQ01.domain.local",
    serverVersion: "6.2.4.27",
    printerAddr: random.ipAddress(),
    files: {
      file: `job-${fileIndex}.pdf`
    }
  }
});

for (let day = 1; day < 30; day++) {
  const folder = path.join(dataFolder, `2018-05-${day}-0001`);
  fs.mkdirSync(folder);

  const filesCount = random.index(800, 2000);
  for (let fileIndex = 0; fileIndex < filesCount; fileIndex++) {
    const xml = builder
      .create(generateJobObject(fileIndex), { encoding: "utf-8" })
      .end({ pretty: true });

    fs.writeFileSync(path.join(folder, `job-${fileIndex}.xml`), xml, err => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  }
}