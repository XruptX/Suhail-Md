const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349057887269";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_13_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQxLFxuICAgICAgICA4NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODgsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTczLFxuICAgICAgICAyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjksXG4gICAgICAgIDQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDU2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDksXG4gICAgICAgIDExMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgODcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzIsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjUwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDExLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDg3LFxuICAgICAgICA0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgODcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQxLFxuICAgICAgICA3OCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM4LFxuICAgICAgICAzNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDM1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MixcbiAgICAgICAgMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDc2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA5NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDExLFxuICAgICAgICAxOTksXG4gICAgICAgIDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjgsXG4gICAgICAgIDg2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDgwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk5MWHZjdUtJSXlKc3pGdXFINHYxNVExaFNCeC9aSXRqdkdyYzF0bkJqd3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInFkY2d1Q2lSUWx1T0g1eGktN3hVeHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDUwMmY1NmEtOTE3ZC00MWU1LTk1OTEtNDEzNWZiZWIxMjE1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNCxcbiAgICAgIDEwNyxcbiAgICAgIDgxLFxuICAgICAgMjM3LFxuICAgICAgMTUsXG4gICAgICAxNDcsXG4gICAgICAyMDEsXG4gICAgICAxNTEsXG4gICAgICAyMixcbiAgICAgIDc4LFxuICAgICAgMTcyLFxuICAgICAgMjQsXG4gICAgICA1MSxcbiAgICAgIDIxMCxcbiAgICAgIDI0NCxcbiAgICAgIDU3LFxuICAgICAgMjQsXG4gICAgICAyNDIsXG4gICAgICA1MSxcbiAgICAgIDM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk5LFxuICAgICAgMTc2LFxuICAgICAgMTA4LFxuICAgICAgMTA5LFxuICAgICAgMTMxLFxuICAgICAgMjI5LFxuICAgICAgMTczLFxuICAgICAgMjE4LFxuICAgICAgODYsXG4gICAgICAxMTIsXG4gICAgICAxNzcsXG4gICAgICAxNTMsXG4gICAgICA3MCxcbiAgICAgIDEyMixcbiAgICAgIDE0MCxcbiAgICAgIDE2NixcbiAgICAgIDE3MixcbiAgICAgIDE5MyxcbiAgICAgIDMwLFxuICAgICAgMTcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlg1Uk4zQlpMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDU3ODg3MjY5OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiWHBpY3kgVHZcIixcbiAgICBcImxpZFwiOiBcIjIzMTQ3MzM3MDEwMzkwNjoyNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNMkl6cllFRUxMRTNiSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInVTM2YySi9seXgxU3dUeTVNMzA4NGkwb0VibUZZOU1NWm9GK0NMd0RrVzA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwib2ttWXVadjRqamlBc2s4elhPang5MjFRdXdFbjJrWVBBZDVoS2lwdjgxT01NWlNjeGcySCsreTkvaVVpd3dzNWY3NXNkS2Q0RzRxYTBQZWpQTlF3QkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZjlkZFloOVdzNnpsTndHQklaWVBJU3VlcHlXUlJjby9lL2NJbzFCYWNRMXdqanJUQTVaalI5R1RscWdYcTdRdlBnTTEvQkF1UkVSZ2xSN1I3QVNpaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA1Nzg4NzI2OToyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzAwMjgwNlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
