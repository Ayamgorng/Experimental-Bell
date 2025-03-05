  /** !-======[ Experimentall ▪︎ Bell🦋 ]======-!
      * Coding by @rifza.p.p *     
      
      🩵 Follow ️me on :
      ▪︎ https://youtube.com/@rifza  
      ▪︎ https://github.com/Rifza123
      ▪︎ https://instagram.com/rifza.p.p?igshid=ZGUzMzM3NWJiOQ==
      ▪︎ https://www.threads.net/@rifza.p.p
      ▪︎ https://xterm.tech
  */
/*!-======[ Preparing Configuration ]======-!*/
import "./toolkit/set/string.prototype.js";
await "./toolkit/set/global.js".r()

/*!-======[ Mudules Imports ]======-!*/
const readline = "readline".import()
const fs = "fs".import()
const chalk = "chalk".import()
const baileys = "baileys".import()
const pino = "pino".import()
const { Boom } = "boom".import();
const { Connecting } = await `${fol[8]}systemConnext.js`.r()
const Event = (await 'events'.import()).default
Event.defaultMaxListeners = 25 

let {
    makeWASocket,
    useMultiFileAuthState,
  	DisconnectReason,
  	getContentType,
  	makeInMemoryStore,
  	Browsers
} = baileys;
/*!-======[ Functions Imports ]======-!*/
let detector = (await (fol[0] + "detector.js").r()).default
Data.utils = (await `${fol[1]}utils.js`.r()).default
Data.helper = (await `${fol[1]}client.js`.r()).default
Data.In = (await `${fol[1]}interactive.js`.r()).default
Data.reaction = (await `${fol[1]}reaction.js`.r()).default
Data.EventEmitter = (await `${fol[1]}events.js`.r()).default
Data.stubTypeMsg = (await `${fol[1]}stubTypeMsg.js`.r()).default
Data.eventGame = (await `${fol[1]}eventGame.js`.r()).default

Data.initialize = (await `${fol[1]}initialize.js`.r()).default

let logger = pino({ level: 'silent' })
let store = makeInMemoryStore({ logger });

async function launch() {
  try {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const question = (text) => new Promise((resolve) => rl.question(text, resolve));
    if(fs.existsSync(session) && !fs.existsSync(session + "/creds.json")) await fs.rmdir(session, { recursive: true }, (err) => {} )   
    if (!fs.existsSync(session + "/creds.json")) {
    let quest = `\n${chalk.red.bold('╭──────────────────────────────────────────────────────╮')}\n${chalk.red.bold('│')} ${chalk.bold('❗️ Anda belum memiliki session ❗️')} ${chalk.red.bold('│')}\n${chalk.red.bold('╰──────────────────────────────────────────────────────╯')}\n            \n${chalk.green('🏷 Pilih salah satu dari opsi berikut untuk menautkan perangkat:')}\n${chalk.blue('▪︎ qr')}\n${chalk.blue('▪︎ pairing')}\n\n${chalk.yellow('* Ketik salah satu dari opsi di atas, contoh:')} ${chalk.blue.bold('pairing')}\n\n${chalk.yellow('Please type here: ')}`;
 
        await sleep(1000)
        const opsi = await question(quest);
  	    if (opsi == "pairing") {
  			global.pairingCode = true
  		} else if (opsi == "qr") {
  			global.pairingCode = false
  		} else {
  			console.log(`Pilihan opsi tidak tersedia!`)
  		}
  	}
  	
  	let { state, saveCreds } = await useMultiFileAuthState(session);
        const Exp = makeWASocket({
            logger,
            printQRInTerminal: !global.pairingCode,
            browser: Browsers.ubuntu('Chrome'),
            auth: state
        });
        
        if (global.pairingCode && !Exp.authState.creds.registered) {
           const phoneNumber = await question(chalk.yellow('Please type your WhatsApp number : '));
           let code = await Exp.requestPairingCode(phoneNumber.replace(/[+ -]/g, ""));
           console.log(chalk.bold.rgb(255, 136, 0)(`\n  ╭────────────────────────────╮\n  │  ${chalk.yellow('Your Pairing Code:')} ${chalk.greenBright(code)}  │\n  ╰────────────────────────────╯\n            `)
           );
        }
        
        /*!-======[ INITIALIZE Exp Functions ]======-!*/
        Data.initialize({ Exp, store })
	  
	  /*!-======[ Auto Delete Chat Every 5 Minutes ]======-!*/
setInterval(async () => {
    const now = Date.now()
    store.messages.forEach(async (messages, jid) => {
        const messagesToDelete = messages.filter(msg => 
            now - (msg.messageTimestamp * 1000) >= 300000
        )
        for (const msg of messagesToDelete) {
            try {
                await Exp.sendMessage(jid, { 
                    delete: { 
                        id: msg.key.id, 
                        remoteJid: msg.key.remoteJid, 
                        fromMe: msg.key.fromMe 
                    } 
                })
            } catch (error) {
                console.error('Gagal menghapus pesan:', error)
            }
        }
    })
}, 300000)

        /*!-======[ Detect File Update ]======-!*/
        keys["detector"] && clearInterval(keys["detector"])
        detector({ Exp, store })
        
        /*!-======[ EVENTS Exp ]======-!*/
        Exp.ev.on('connection.update', async (update) => {
            await Connecting({ update, Exp, Boom, DisconnectReason, sleep, launch });
        });

        Exp.ev.on('creds.update', saveCreds);
        
        Exp.ev.on('messages.upsert', async ({
  			messages
  		}) => {
            const cht = {
                ...messages[0],
                id: messages[0].key.remoteJid
            }
            let isMessage = cht?.message
            let isStubType = cht?.messageStubType
  			if (!(isMessage || isStubType)) return;
  			if (cht.key.remoteJid === 'status@broadcast') {

  				if(!cfg.reactsw) cfg.reactsw = { on: false, emojis: ["😍","😂","😬","🤢","🤮","🥰","😭"] }
  				
  			    if(cfg.reactsw.on){
  				  let { emojis } = cfg.reactsw
  				  await Exp.sendMessage(
                    cht.id,
                    { react: { key: cht.key, text: emojis.getRandom() } },
                    { statusJidList: [cht.key.participant, Exp.user.id.split(':')[0] + from.sender] }
                  )
  				} 
  				else if(cfg.autoreadsw == true){
  				  await Exp.readMessages([cht.key]);
  			  	  let typ = getContentType(cht.message);
  		 		  console.log((/protocolMessage/i.test(typ)) ? `${cht.key.participant.split('@')[0]} Deleted story❗` : 'View user stories : ' + cht.key.participant.split('@')[0])
  		 		}
  				return
  			} else {
  			     const exs = { cht, Exp, is: {}, store }
  			     await Data.utils(exs)
  			     
  			     if(isStubType) { 
  			       Data.stubTypeMsg(exs)
  			     } else { 
                  await Data.helper(exs);
                 }
             }
	    });
	    
	    Exp.ev.on('call', async([c])=>{
	      let { from, id, status } = c
	      if(status !== 'offer') return
	      cfg.call = cfg.call || { block: false, reject: false }
	      let { block, reject } = cfg.call
	      if(reject){
	        await Exp.rejectCall(id, from)
	        await Exp.sendMessage(from, { text: "⚠️JANGAN TELFON❗" })
	      }
	      if(block){
	        let text = `\`⚠️KAMU TELAH DI BLOKIR!⚠️\``
	          + "\n- *Menelfon tidak diizinkan karena sangat mengganggu aktivitas kami*"
	          + "\n> _Untuk membuka blokir, silahkan hubungi owner!_"
	        await Exp.sendMessage(from, { text })
	        await Exp.sendContacts({ id: from }, owner)
	        await sleep(2000)
	        await Exp.updateBlockStatus(from, "block")
	      }
	    })
	    store.bind(Exp.ev);
	} catch (error) {
	  console.error(error)
	}
}
launch()
process.on("uncaughtException", e => {
  console.error(e)
})
