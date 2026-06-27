/**
 * Script para descargar las 108 imágenes desde Google Drive.
 *
 * Uso:
 *   GOOGLE_ACCESS_TOKEN=<tu_token> node scripts/download-images.js
 *
 * Obtén tu token en: https://developers.google.com/oauthplayground
 * Scope necesario: https://www.googleapis.com/auth/drive.readonly
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'images');
const TOKEN = process.env.GOOGLE_ACCESS_TOKEN;

if (!TOKEN) {
  console.error('ERROR: Falta GOOGLE_ACCESS_TOKEN. Ejecútalo así:');
  console.error('  GOOGLE_ACCESS_TOKEN=ya29.xxx node scripts/download-images.js');
  process.exit(1);
}

const images = [
  { num: 1,   filename: '01_0000.png', id: '1CDkkM8oX5_kF4KCX46RTnkl3MGPzRZqF' },
  { num: 2,   filename: '02_0004.png', id: '1_htiVff4hW6779Zw9xWYP31coFceAUnK' },
  { num: 3,   filename: '03_0007.png', id: '1PPUpjvYAL-Nos6y6DGK147UELpKnOt4k' },
  { num: 4,   filename: '04_0011.png', id: '1SUoB8AE7YmxypThMrdBbXjqKENdC3eXC' },
  { num: 5,   filename: '05_0016.png', id: '10usGQLXhGzHDoWGb8S6kLWBzqmHUuVh-' },
  { num: 6,   filename: '06_0020.png', id: '1A7j9XHADNiFmSw-_1_0VQYyTm6psVcvD' },
  { num: 7,   filename: '07_0025.png', id: '1LTZQ_6h6K6TK7_i9-lZfYF-fswKHHjdU' },
  { num: 8,   filename: '08_0029.png', id: '1MSt6fFCI61hgSrS7QibV-BsF0hrTyasj' },
  { num: 9,   filename: '09_0035.png', id: '1hV498Rll0ejs7e9_cVxCXxqXdgjoFE-u' },
  { num: 10,  filename: '10_0038.png', id: '1-gCpeGb00oSseWAX7fPlwfp6S4RmOn6-' },
  { num: 11,  filename: '11_0044.png', id: '1THYaGYmAT4um3FS-hTVVl0FTS4RcjRzA' },
  { num: 12,  filename: '12_0049.png', id: '1ga3UgFGXrjaIuTzhDtSzPI-CZg7Acm1V' },
  { num: 13,  filename: '13_0054.png', id: '1LP11o4NRl3YCsANgwwijXzCa49V04JRA' },
  { num: 14,  filename: '14_0100.png', id: '1OHFBFwWgIUWnlLUy2CXXdXHAMso-Fl8A' },
  { num: 15,  filename: '15_0106.png', id: '1Y1JyoHCZYu1fa3IejMcYADYaRHjRCTjC' },
  { num: 16,  filename: '16_0111.png', id: '1abXKkztI4K81qTf5v_hJeZtKy0_1hWQx' },
  { num: 17,  filename: '17_0116.png', id: '1lmVccJVDzNIlsQKtb0q3dQuM5DtbLZKl' },
  { num: 18,  filename: '18_0121.png', id: '1fmkhYer3I4ppwE0IpLD52stSELD5q2EY' },
  { num: 19,  filename: '19_0126.png', id: '1sO5jw49iz7LcltiDm7ILjzjOoGchAy7t' },
  { num: 20,  filename: '20_0131.png', id: '1Fg1MGxdKlGzgvAygKpdklVtyFq7NXau0' },
  { num: 21,  filename: '21_0135.png', id: '1DiwXMxuuEzGZr3McCdJQWF-JTolcKydO' },
  { num: 22,  filename: '22_0141.png', id: '1pUCeoJ3hauHIFqK8tVD5LPkKC4lAro3N' },
  { num: 23,  filename: '23_0146.png', id: '1R7qn0B7dAOyOPyV1ORLB2spe2_C1FMNa' },
  { num: 24,  filename: '24_0152.png', id: '1cRynoBGqG5wVCNFCVd_mQiPku0LU7fnX' },
  { num: 25,  filename: '25_0158.png', id: '19A2jIRxh1nZvit3icHKlaArI2WON8SD7' },
  { num: 26,  filename: '26_0204.png', id: '1PQ8KYRqevzmnWWB2HoprWCl-1IjX9zD-' },
  { num: 27,  filename: '27_0208.png', id: '1m5in7T86Irb8C6uiAqtdmx0Jgf8DcgWJ' },
  { num: 28,  filename: '28_0213.png', id: '17mZtg7f7JwRF3cNA7MO2ATb0V-Gcm29r' },
  { num: 29,  filename: '29_0219.png', id: '1_Rh-hSLrzd7765spCNYgs3p0Xnlkc7mi' },
  { num: 30,  filename: '30_0224.png', id: '1qKgF_hOjeFcgRQ4qY_SctZgfrniNaKnJ' },
  { num: 31,  filename: '31_0231.png', id: '1IlORy1l7xm_zIlKPPlyQl_1l92L67kWr' },
  { num: 32,  filename: '32_0236.png', id: '11fDTDhlYL-q6sNEE2_e2NotmWWRC-SYu' },
  { num: 33,  filename: '33_0242.png', id: '1L7_aQP6j_qmY7SS-J-UnA8AnhReA0fRG' },
  { num: 34,  filename: '34_0248.png', id: '1L8bS8xhZOKDAqp3HkdsCFu6BDoX_fxTL' },
  { num: 35,  filename: '35_0252.png', id: '1eDCJoCzHqSePzMSsZJwWRv2QwrPEXpfL' },
  { num: 36,  filename: '36_0258.png', id: '10UnN4QOYSWaUKsYS8O-KEMur57r6C8nB' },
  { num: 37,  filename: '37_0303.png', id: '17N3lKQsWtPaJ8w1n1tCiisisCHnQTXaq' },
  { num: 38,  filename: '38_0306.png', id: '1sn-jKRuTv5Zgx1rtj_6SXVjs0iKoibV1' },
  { num: 39,  filename: '39_0311.png', id: '1lhLDSaRNy0ESvALXFC8J7pqBUr_T32Yl' },
  { num: 40,  filename: '40_0317.png', id: '1gjBtO9QqrmJNAQURfdMwvLzA7e7edfSj' },
  { num: 41,  filename: '41_0322.png', id: '1cngW09XY7WqKSKeM63Z3rMTqWF0N0pPB' },
  { num: 42,  filename: '42_0329.png', id: '1XDzuH8v_q4dE7N2NH7Vepxxz7fcdA3x_' },
  { num: 43,  filename: '43_0333.png', id: '13EcygeNWQqfRpd6SU2rnkMw2YdjmK5XC' },
  { num: 44,  filename: '44_0336.png', id: '19mN0Bo0blnE7RmcZF0aohQQ8N4NFoqsk' },
  { num: 45,  filename: '45_0340.png', id: '1Y5ooDlcnV8MnHrx70ohC8WXqRyFMifW9' },
  { num: 46,  filename: '46_0344.png', id: '1z3YUZ2whjH1CZr9z8gEdghbomWRfpdBF' },
  { num: 47,  filename: '47_0348.png', id: '19KBFZlpl9ZZoOiegw0un6uf0wF5X3GkU' },
  { num: 48,  filename: '48_0353.png', id: '1iKIMil16AXlifIZZfBVe0PJOfsWAvV7h' },
  { num: 49,  filename: '49_0359.png', id: '14HOiI0R7rS8LJ2pvM0k_3taFhWWO0cwT' },
  { num: 50,  filename: '50_0402.png', id: '1ekRIQ7wb21hH8HPwjmpbSfmw9rtoqyw6' },
  { num: 51,  filename: '51_0408.png', id: '1pcYvqYHc6CQEhDAFfKIjL150OlRcfCZ1' },
  { num: 52,  filename: '52_0412.png', id: '1s1vfmEwhHO0n5fgDWfJaXikM4_EmzZuo' },
  { num: 53,  filename: '53_0418.png', id: '1FGo504n0GVWxaRzPOIOHc1AcxH0K_qDy' },
  { num: 54,  filename: '54_0423.png', id: '1oRObg6RKd9nHAYMyjtYMnmwCeS_cWKCC' },
  { num: 55,  filename: '55_0429.png', id: '1ZTeFG-5VZ85L1Fo8_QjB3w2zjjVpqjKd' },
  { num: 56,  filename: '56_0435.png', id: '1uDN_c_UYVSG3XOPidQ6VbXbfHANZMys5' },
  { num: 57,  filename: '57_0441.png', id: '1_BOTVS0iTFOHSLQSs2mdQ3_5y4FVjH4_' },
  { num: 58,  filename: '58_0445.png', id: '1ibX0eXeHmxPQrGMoG3r0r12_Uw9fpBkD' },
  { num: 59,  filename: '59_0451.png', id: '1fjNfOz2tSXoW21oD2HMKSRfma8aFcjBN' },
  { num: 60,  filename: '60_0457.png', id: '14Mfj7vV3DLD6s2-s3wEkSZr_C2RqOiOc' },
  { num: 61,  filename: '61_0503.png', id: '1H8EanwCZpSivwnmxZQ6uqS1Jh3i5uCTh' },
  { num: 62,  filename: '62_0505.png', id: '11-7DYgyb-hYo19VlhO6vWx6Zk1RDEIoC' },
  { num: 63,  filename: '63_0512.png', id: '19Clr_AqRXwgbBEvEkdlNS1CPxckx9LPf' },
  { num: 64,  filename: '64_0514.png', id: '1W-rXLHeZl4NmN1bU5JxCJRwAhPvabNLZ' },
  { num: 65,  filename: '65_0522.png', id: '1PdTzK_l1lIIuHkHXP8f66Qs1TLWy8vbP' },
  { num: 66,  filename: '66_0525.png', id: '1ySQ0qB-gtNjKtx5Zpzuc-rqo4_UlBOvg' },
  { num: 67,  filename: '67_0529.png', id: '1DoPHo7XgIoWjigee0MxM0miRSszR6X0m' },
  { num: 68,  filename: '68_0535.png', id: '1BwXSs_fLEgWHdMgW_VsU3TGIdsDzJJps' },
  { num: 69,  filename: '69_0539.png', id: '18EXIt3YV3uhcK52VhLRpDZnV9A9aUwHl' },
  { num: 70,  filename: '70_0546.png', id: '1fYia7w1ProT_jRWNaq5DwkSWEmamszzj' },
  { num: 71,  filename: '71_0551.png', id: '1E4dZpaz5f_41mRcPyUOExESPQn-eMDVh' },
  { num: 72,  filename: '72_0553.png', id: '10w-p3Q_gMF4PrhvZCMIEctnulZJHAGYD' },
  { num: 73,  filename: '73_0557.png', id: '1-XP_PGNq4FLRsvQjAyaSRQ46Lxho_Axn' },
  { num: 74,  filename: '74_0604.png', id: '19d-LTiMJh3axjBd6P0eQ629ZxZLqAblU' },
  { num: 75,  filename: '75_0606.png', id: '1bFQ-VTniXgR4I1ig4IlfXJb-dFCXF0ri' },
  { num: 76,  filename: '76_0611.png', id: '1hNIfnoKNnE7owtyMoHWRNcMBLRTLFGcP' },
  { num: 77,  filename: '77_0615.png', id: '1h06lkuKFZIp9IvenFxlkiZ3DL8eIFwGv' },
  { num: 78,  filename: '78_0620.png', id: '1dwXtVwY5tDk6WNZnW4AlE2cgMwKsvFkA' },
  { num: 79,  filename: '79_0622.png', id: '1hRzk7bvrY3GdwKTwvrYYi8Dx9eEp0xrZ' },
  { num: 80,  filename: '80_0628.png', id: '1tIjQ4YVF5PCJPlITDdSnjhqEJ-G33IKz' },
  { num: 81,  filename: '81_0630.png', id: '1BXnsbVVtTfhrEPsI5GUZanNF1jIifCy1' },
  { num: 82,  filename: '82_0634.png', id: '17GgcZjRoRufCq4FdbWPpSAM_aEKWh3ay' },
  { num: 83,  filename: '83_0637.png', id: '1CoMoHri8lBJpaE5cTMrpjYvAgUDBSBau' },
  { num: 84,  filename: '84_0642.png', id: '1ekm2xyDHhPQfS8a67pCyHGm5zWBGFAfx' },
  { num: 85,  filename: '85_0645.png', id: '1NTqTfqoP6pQ36VqRiG1MDD98Z-jUZviF' },
  { num: 86,  filename: '86_0649.png', id: '1PKliFev51mbP5q_eQu9DDwkba2ysCKFF' },
  { num: 87,  filename: '87_0652.png', id: '1KChotNJLDAMviXIB-p1iof89dIwVnmHT' },
  { num: 88,  filename: '88_0659.png', id: '1PvDxWK4woysejcdqMODgbk8dLCv5-GR3' },
  { num: 89,  filename: '89_0705.png', id: '1bJv9XQybeWwk-XfzwjdovB3CLUnOiYkd' },
  { num: 90,  filename: '90_0709.png', id: '1z1jfXYTe3ZXlwyU6471oxk5184_b9o7i' },
  { num: 91,  filename: '91_0713.png', id: '1iJKiXwZZ-BH3Kw4WrrEOgXxs1NbkEhko' },
  { num: 92,  filename: '92_0719.png', id: '13QGYmI69FcQOEPax44eeEPTAV1VqNQpS' },
  { num: 93,  filename: '93_0727.png', id: '1ku17kZcNe3swhK1J7_XeigbWAG7faEEm' },
  { num: 94,  filename: '94_0731.png', id: '1E8OiuzeUrQe925fbhHJXyjdq9S72u_5w' },
  { num: 95,  filename: '95_0734.png', id: '1ic_oTgYth1vxNdGi7QWpLskJNzyrzzew' },
  { num: 96,  filename: '96_0739.png', id: '1cZ6LHvIjHIWny_ce1OwjLcPH2PQns9Iy' },
  { num: 97,  filename: '97_0746.png', id: '1YzBxnZkiDFRa2OgyagKJV_qe8aQ7Q_28' },
  { num: 98,  filename: '98_0750.png', id: '1uPcQ-uoMAVPNspzL6hFJHvys_bQxX9O9' },
  { num: 99,  filename: '99_0756.png', id: '1FlKV4aErIU-WkrEq0_waCdba9gpl72SE' },
  { num: 100, filename: '100_0758.png', id: '1eMkzpR3ty6ViWT_dI_rYi8JmjufPDKxZ' },
  { num: 101, filename: '101_0804.png', id: '1FtxWNBtQ_QqS2E1GCoMJvdUF4mJDi2G9' },
  { num: 102, filename: '102_0808.png', id: '1R5SsW5fdndapAlCOaRV0E82-9kaOghs4' },
  { num: 103, filename: '103_0812.png', id: '1uSs2Nm0uykRxzHMiYz6A_pK3kWaf6x38' },
  { num: 104, filename: '104_0818.png', id: '1QUWqyo6qECN5cmTpCVpvLugolMnOHfQy' },
  { num: 105, filename: '105_0820.png', id: '1eXM2f2dQx6K4BozGmBiQqcpYMTJX42GH' },
  { num: 106, filename: '106_0829.png', id: '1a_nbhxw379IQrYn82KciRA18JwpQvaOD' },
  { num: 107, filename: '107_0833.png', id: '14MsHIlgKr8pLBdSJUISIq-DB0okcZxs9' },
  { num: 108, filename: '108_0837.png', id: '1VSOIicTglqyem_SwbLUwgxjt4PCDwyFe' },
];

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

function downloadFile(fileId, destPath) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(destPath)) {
      console.log(`  ⏭  Ya existe: ${path.basename(destPath)}`);
      return resolve();
    }
    const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`;
    const options = {
      headers: { Authorization: `Bearer ${TOKEN}` },
    };
    const file = fs.createWriteStream(destPath);
    https.get(url, options, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
      } else {
        fs.unlink(destPath, () => {});
        reject(new Error(`HTTP ${res.statusCode} para ${fileId}`));
      }
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

async function downloadAll() {
  const CONCURRENCY = 5;
  let completed = 0;

  for (let i = 0; i < images.length; i += CONCURRENCY) {
    const batch = images.slice(i, i + CONCURRENCY);
    await Promise.all(batch.map(async (img) => {
      const dest = path.join(OUTPUT_DIR, img.filename);
      try {
        await downloadFile(img.id, dest);
        completed++;
        process.stdout.write(`\r  Descargadas: ${completed}/${images.length} imágenes`);
      } catch (e) {
        console.error(`\n  ERROR imagen ${img.num}: ${e.message}`);
      }
    }));
  }
  console.log(`\n\n✅ Descarga completada: ${completed}/${images.length} imágenes en ${OUTPUT_DIR}`);
}

downloadAll();
