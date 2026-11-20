/**
 * TERAKOYA ENGLISH STUDIO (TES) — SITE CONFIGURATION
 * ===================================================
 * Edit this file to update your Google Classroom links, Google Drive folders,
 * YouTube playlists, school hours, and Google Form contact link.
 * No HTML/CSS knowledge required!
 */

window.TES_CONFIG = {
  // Default language on first visit: "en" or "ja"
  defaultLang: "en",

  school: {
    shortName: "TES",
    nameEn: "Terakoya English Studio",
    nameJa: "寺子屋イングリッシュスタジオ (TES)",
    taglineEn: "Student Portal, Homework & Study Resources",
    taglineJa: "生徒用ポータル・宿題提出・学習教材ライブラリ",
    email: "jeskyoto@gmail.com",
    locationEn: "10-6 Yoshidanakaojicho, Sakyo Ward, Kyoto 606-8313",
    locationJa: "〒606-8313 京都府京都市左京区吉田中大路町10-6",
    // Paste your LINE Official Account URL here when ready (leave "" to hide)
    lineUrl: "",
    // Put your real LINE QR image filename here later (e.g. "line-qr.png"). Leave "" to show the mockup QR.
    lineQrImageUrl: "",
    // Paste your Google Form "Embed" src URL here (e.g., "https://docs.google.com/forms/d/e/.../viewform?embedded=true")
    contactFormEmbedUrl: "",
    // Your school YouTube channel
    youtubeChannelUrl: "https://www.youtube.com/@terakoya1067",
    // Optional: Paste a free YouTube Data API v3 key to auto-update playlist dropdown titles
    youtubeApiKey: ""
  },

  /**
   * CLASSES (Google Classroom + Google Drive Worksheets)
   * ----------------------------------------------------
   * - classroomUrl: Paste the class invite/stream URL from Google Classroom
   * - driveFolderId: Paste the Folder ID from Google Drive URL
   *   (e.g. from https://drive.google.com/drive/folders/1AbC2dEfG3hI -> "1AbC2dEfG3hI")
   *   Remember to set the Drive folder to "Anyone with the link -> Viewer".
   */
  classes: [
    {
      id: "jhs1",
      category: "jhs",
      badge: "JHS 1",
      nameEn: "2026 Tulip🌷 class JHS1",
      nameJa: "2026 Tulip🌷 class JHS1（中学1年）",
      scheduleEn: "Weekly Homework & Materials",
      scheduleJa: "週ごとの宿題・教材",
      classroomUrl: "https://classroom.google.com/w/NzcxMTUzNTg2OTI0/t/all",
      driveFolderId: "1UXiosg16BzSmKQYS2Ga42q1Suw4HYGXsSVsYSVVfR8RBgGQU0w2A9eHnCBRws5J469lUbhrL"
    },
    {
      id: "jhs2",
      category: "jhs",
      badge: "JHS 2",
      nameEn: "2026 TES JHS2",
      nameJa: "2026 TES JHS2（中学2年）",
      scheduleEn: "Weekly Homework & Materials",
      scheduleJa: "週ごとの宿題・教材",
      classroomUrl: "https://classroom.google.com/w/ODY2NDE0MDIwNTE4/t/all",
      driveFolderId: "1OukKH-9X5YbDomHhUPSctZhBB8k9GFEr0QwHUDD13kspZmSMcwZGLS907CPkC7cHDpUn6QfB"
    },
    {
      id: "jhs3",
      category: "jhs",
      badge: "JHS 3",
      nameEn: "2026 TES JHS3",
      nameJa: "2026 TES JHS3（中学3年）",
      scheduleEn: "Exam Prep & Weekly Homework",
      scheduleJa: "受験対策・週ごとの宿題",
      classroomUrl: "https://classroom.google.com/w/NjkwNTU4NDQyNTkx/t/all",
      driveFolderId: "1tJtigbxSQTuiQtZ96fgIu-lKOdERqotW6MNTe7C0NVc61vc_NvoD7d-40ClePxq1y3ZEA4vp"
    },
    {
      id: "hs1",
      category: "hs",
      badge: "HS 1",
      nameEn: "2026 TES HS1",
      nameJa: "2026 TES HS1（高校1年）",
      scheduleEn: "Weekly Homework & Materials",
      scheduleJa: "週ごとの宿題・教材",
      classroomUrl: "https://classroom.google.com/w/NjAzMTM0OTI0MTQz/t/all",
      driveFolderId: "1SomK54gCv8d7rCyG888PSowVy68T19va0Wdh4VEYTTAMVj6i7WtRXBfR39Z773hldBlXmZCP"
    },
    {
      id: "hs2",
      category: "hs",
      badge: "HS 2",
      nameEn: "2026 TES HS2",
      nameJa: "2026 TES HS2（高校2年）",
      scheduleEn: "Weekly Homework & Materials",
      scheduleJa: "週ごとの宿題・教材",
      classroomUrl: "https://classroom.google.com/w/NDk0ODE4MTQ3ODEy/t/all",
      driveFolderId: "1vIbpHQZrjT4RVUPFGNIqjIC8vXj6aqiNLcGq9pNNoFc8s9xHUJe8NA_727iyJtG8_ZZN3sUo"
    },
    {
      id: "hs3",
      category: "hs",
      badge: "HS 3",
      nameEn: "2026 TES HS3",
      nameJa: "2026 TES HS3（高校3年）",
      scheduleEn: "University Prep & Assignments",
      scheduleJa: "大学受験対策・課題",
      classroomUrl: "",
      driveFolderId: ""
    },
    {
      id: "kids-thu",
      category: "kids",
      badge: "KIDS THU",
      nameEn: "2026 TES Kids Thursday",
      nameJa: "2026 TES キッズ 木曜クラス",
      scheduleEn: "Thursday Class Updates & HW",
      scheduleJa: "木曜クラスのお知らせ・宿題",
      classroomUrl: "",
      driveFolderId: ""
    },
    {
      id: "kids-fri",
      category: "kids",
      badge: "KIDS FRI",
      nameEn: "2026 TES Kids Friday",
      nameJa: "2026 TES キッズ 金曜クラス",
      scheduleEn: "Friday Class Updates & HW",
      scheduleJa: "金曜クラスのお知らせ・宿題",
      classroomUrl: "",
      driveFolderId: ""
    }
  ],

  /**
   * WORKSHEET FOLDERS (Google Drive — 1 shared folder per level)
   * ------------------------------------------------------------
   * Add the Drive Folder ID for each level (set sharing to "Anyone with the link -> Viewer").
   */
  worksheetFolders: [
    {
      id: "ws-jhs",
      category: "jhs",
      badge: "JHS 1–3",
      titleEn: "Junior High School Worksheets",
      titleJa: "中学生用プリント・教材",
      driveFolderId: "1qCOSsrQJQ6Rus765FZdj1qB_TuEi-6KE"
    },
    {
      id: "ws-hs",
      category: "hs",
      badge: "HS 1–3",
      titleEn: "High School Worksheets",
      titleJa: "高校生用プリント・教材",
      driveFolderId: "1LPZn9rI-Dsw374y4GXBMEyNVR53f3rMk"
    },
    {
      id: "ws-kids",
      category: "kids",
      badge: "KIDS",
      titleEn: "Kids Worksheets",
      titleJa: "キッズ用プリント・教材",
      driveFolderId: ""
    }
  ],

  /**
   * EDUCATIONAL VIDEO LIBRARY (Unlisted YouTube Playlists or Videos)
   * ----------------------------------------------------------------
   * - category: "stories", "jhs", "hs", "kids", "general" (or an array like ["stories", "kids"])
   * - type: "playlist" or "video"
   * - youtubeId: For a playlist, the ID after "?list="
   *              For a single video, the ID after "v=" or "youtu.be/"
   *
   * To add a new story series playlist later, copy one block below and update title + youtubeId!
   */
  videos: [
    {
      id: "v1",
      category: "diaries",
      titleEn: "Bill's Diary",
      titleJa: "Bill's Diary（ビルの日記）",
      descEn: "Listening and reading story series following Bill's daily diary.",
      descJa: "ビルの日記をテーマにしたリスニング＆リーディング動画シリーズ。",
      type: "playlist",
      youtubeId: "PLZ7dNS2FajUkUOjWqcHiLz0vOj2L1mghe",
      episodeCount: 30
    },
    {
      id: "v2",
      category: "diaries",
      titleEn: "Sara's Diary",
      titleJa: "Sara's Diary（サラの日記）",
      descEn: "Listening and reading story series following Sara's daily diary.",
      descJa: "サラの日記をテーマにしたリスニング＆リーディング動画シリーズ。",
      type: "playlist",
      youtubeId: "PLZ7dNS2FajUlBOvsEmjZIJEALWrBwK_7U",
      episodeCount: 30
    },
    {
      id: "v3",
      category: "stories",
      titleEn: "Winnie the Witch",
      titleJa: "Winnie the Witch（魔女のウィニー）",
      descEn: "Fun storytime and listening playlist featuring Winnie the Witch.",
      descJa: "魔女のウィニーの楽しいストーリー＆リスニング動画。",
      type: "playlist",
      youtubeId: "PLZ7dNS2FajUkOvjLuefP76z8xXLiuXalM",
      episodes: [
        "Winnie At The Seaside Mt 4",
        "Winnie At The Seaside Mt 4 (2)",
        "Winnie Happy Birthday Mt 3",
        "Winnie Happy Birthday Mt 3 (2)",
        "Winnie In Space Mt 5",
        "Winnie In Space Mt 5 (2)",
        "Winnie The Witch Anniversary Edition 1 MT",
        "Winnie The Witch Anniversary Edition 1 MT (2)",
        "Winnies Amazing Pumpkin 1 MT",
        "Winnies Amazing Pumpkin 1 MT (2)",
        "Winnies Flying Carpet Bday Sequel Mt 6",
        "Winnies Flying Carpet Bday Sequel Mt 6 (2)",
        "Winnies Magic Wand 1 MT",
        "Winnies Magic Wand 1 MT (2)",
        "Winnies Midnight Dragon Mt 7"
      ]
    },
    {
      id: "v4",
      category: "stories",
      titleEn: "Storybooks",
      titleJa: "Storybooks（ストーリーブック）",
      descEn: "Read-along English storybooks for listening and reading practice.",
      descJa: "リスニングとリーディング練習のための英語絵本・読み聞かせシリーズ。",
      type: "playlist",
      youtubeId: "PLZ7dNS2FajUnZogJk295zpPPHE2KUKCCb",
      episodes: [
        "The Rope Swing by A",
        "Strawberry Jam by M",
        "Drawing Adventure by K",
        "Camping Adventure by S",
        "A Fright in the Night by T",
        "A Fright in the Night",
        "Land of the Dinosaurs",
        "JES Storytime Runaway Rabbit",
        "JES storytime We're Going On A Croc Hunt"
      ]
    },
    {
      id: "v5",
      category: "reading-power",
      titleEn: "Reading Power",
      titleJa: "Reading Power（リーディングパワー）",
      descEn: "Reading Power video series.",
      descJa: "リーディングパワー・シリーズ。",
      type: "playlist",
      youtubeId: "PLZ7dNS2FajUkC-yxIBTp3K3Rt5il-LR73",
      episodes: [
        "RP Part 2 Intro 2021",
        "RP Part 3 1 Intro 2021",
        "RP Part 3 2 Intro 2021",
        "RP Part 3 3 Intro 2021",
        "RP Part 3 4 Intro 2021",
        "【高】【外国語】ディスカッションの活動をとおして思考力・判断力・表現力等を高める"
      ]
    },
    {
      id: "v6",
      category: "reading-power",
      titleEn: "Basic Reading Power",
      titleJa: "Basic Reading Power（ベーシック・リーディングパワー）",
      descEn: "Basic Reading Power video series.",
      descJa: "ベーシック・リーディングパワー・シリーズ。",
      type: "playlist",
      youtubeId: "PLZ7dNS2FajUlBpR6xRvi5AUCzFADqErH0",
      episodes: [
        "BRP Intro 2021",
        "BRP Episode 1 2021",
        "BRP Episode 2 2021",
        "BRP Episode 3 2021",
        "BRP Episode 4 2021",
        "BRP Episode 5 2021",
        "BRP Episode 6 2021",
        "BRP Episode 7 2021",
        "BRP Episode 8 2021",
        "BRP Episode 9 2021",
        "BRP Episode 10 2021",
        "BRP Episode 11 2021",
        "BRP Episode 12 2021"
      ]
    }
  ]
};
