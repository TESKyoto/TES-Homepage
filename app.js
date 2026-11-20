(function () {
  const cfg = window.TES_CONFIG || {};
  const STORAGE_KEY = "tes_lang";

  const I18N = {
    en: {
      nav_home: "Home",
      nav_homework: "Homework",
      nav_worksheets: "Worksheets",
      nav_videos: "Videos",
      lang_btn: "日本語",

      hero_pill: "STUDENT PORTAL · TES",
      hero_title: "Terakoya English Studio",
      hero_sub: "Access Google Classroom assignments, download class worksheets, and watch review videos—all in one place.",
      hero_cta_hw: "Go to Homework",
      hero_cta_ws: "Worksheets & PDFs",

      portal_title: "Student Quick Access",
      portal_sub: "Choose what you need for today's study.",
      card_hw_title: "Homework (Google Classroom)",
      card_hw_desc: "Check assignments and upload photos of your completed homework by class.",
      card_hw_btn: "Open Homework Hub",
      card_ws_title: "Worksheets & PDFs",
      card_ws_desc: "Download handouts and extra practice sheets directly from our Google Drive.",
      card_ws_btn: "Browse Worksheets",
      card_vid_title: "Educational Videos",
      card_vid_desc: "Watch grammar reviews, listening practice, and pronunciation guides.",
      card_vid_btn: "Watch Videos",

      info_email_label: "Contact Email",
      info_loc_label: "Location",
      info_line_label: "LINE Official Account",
      info_line_soon: "Coming Soon",
      info_line_btn: "Open LINE",
      info_line_qr_mock: "Sample QR (Coming Soon)",

      contact_title: "Contact Us",
      contact_sub: "Questions about classes, trial lessons, or homework? Send us a message below.",
      contact_placeholder: "Paste your Google Form embed URL into <code>config.js</code> (<code>contactFormEmbedUrl</code>) and your contact sheet will appear right here.",

      hw_header_title: "Homework & Google Classroom",
      hw_header_sub: "Select your class below to view assignments and turn in your work.",
      filter_all: "All Classes",
      filter_jhs: "Junior High (JHS 1–3)",
      filter_hs: "High School (HS 1–3)",
      filter_kids: "Kids (Thu / Fri)",
      open_classroom: "Open Google Classroom",
      classroom_pending: "No Google Classroom (In-class / Worksheets)",

      guide_title: "How to Upload Homework (Smartphone / Tablet)",
      guide_s1_title: "1. Open Your Class",
      guide_s1_desc: "Tap your class button above to launch the Google Classroom app.",
      guide_s2_title: "2. Open Classwork & Add Work",
      guide_s2_desc: "Tap the 'Classwork' tab, open the assignment, tap 'Your work' at the bottom, then tap '+ Add work'.",
      guide_s3_title: "3. Snap & Turn In",
      guide_s3_desc: "Take a clear photo of your notebook or worksheet, then tap 'Turn in'.",

      ws_header_title: "Worksheets & PDF Repository",
      ws_header_sub: "Files added to our Google Drive appear here automatically.",
      ws_view_list: "List View",
      ws_view_grid: "Grid View",
      ws_pending: "Drive folder not connected yet. Add <code>driveFolderId</code> in <code>config.js</code> (set folder sharing to 'Anyone with the link').",

      vid_header_title: "TES Video Library",
      vid_header_sub: "Review lessons, pronunciation practice, and class playlists.",
      vid_filter_all: "All Videos",
      vid_filter_stories: "Story Series",
      vid_filter_diaries: "Diaries",
      vid_filter_reading: "Reading Power",
      vid_filter_kids: "Kids",
      vid_channel_btn: "Visit Our YouTube Channel (@terakoya1067)",
      vid_jump_label: "Jump to Episode",
      vid_episode: "Episode",
      vid_open_yt: "Open Playlist ↗",
      vid_pending: "YouTube playlist not connected yet. Add <code>youtubeId</code> in <code>config.js</code>.",

      footer_copy: "© " + new Date().getFullYear() + " Terakoya English Studio (TES). All rights reserved."
    },
    ja: {
      nav_home: "ホーム",
      nav_homework: "宿題",
      nav_worksheets: "プリント・PDF",
      nav_videos: "動画ライブラリ",
      lang_btn: "English",

      hero_pill: "生徒用ポータル · TES",
      hero_title: "寺子屋イングリッシュスタジオ",
      hero_sub: "Google Classroomでの宿題提出、プリントのダウンロード、復習動画の視聴がここから簡単に行えます。",
      hero_cta_hw: "宿題ページへ",
      hero_cta_ws: "プリント・PDFを見る",

      portal_title: "クイックアクセス",
      portal_sub: "必要な学習メニューを選んでください。",
      card_hw_title: "宿題（Google Classroom）",
      card_hw_desc: "クラス別の課題確認や、ノート・プリントの写真提出はこちらから。",
      card_hw_btn: "宿題ページを開く",
      card_ws_title: "プリント・PDF教材",
      card_ws_desc: "Googleドライブに保存された配布プリントや練習問題をダウンロードできます。",
      card_ws_btn: "プリントを見る",
      card_vid_title: "学習動画ライブラリ",
      card_vid_desc: "文法の復習、リスニング練習、発音ガイド動画をいつでも視聴できます。",
      card_vid_btn: "動画を見る",

      info_email_label: "メール",
      info_loc_label: "場所",
      info_line_label: "公式LINEアカウント",
      info_line_soon: "準備中",
      info_line_btn: "LINEを開く",
      info_line_qr_mock: "サンプルQR（準備中）",

      contact_title: "お問い合わせ",
      contact_sub: "クラスや体験レッスン、宿題に関するご質問はこちらのフォームからご連絡ください。",
      contact_placeholder: "<code>config.js</code> の <code>contactFormEmbedUrl</code> にGoogleフォームの埋め込みURLを貼り付けると、ここにお問い合わせフォームが表示されます。",

      hw_header_title: "宿題・Google Classroom",
      hw_header_sub: "自分のクラスを選んで課題の確認・提出を行ってください。",
      filter_all: "すべて",
      filter_jhs: "中学生 (JHS 1–3)",
      filter_hs: "高校生 (HS 1–3)",
      filter_kids: "キッズ (木・金)",
      open_classroom: "Classroomを開く",
      classroom_pending: "Google Classroomなし（授業・プリントのみ）",

      guide_title: "スマホ・タブレットでの宿題提出方法",
      guide_s1_title: "1. クラスを開く",
      guide_s1_desc: "上のクラスボタンをタップして Google Classroom アプリを開きます。",
      guide_s2_title: "2. 「授業」タブから課題を追加",
      guide_s2_desc: "「授業」タブで課題を開き、画面下の「あなたの課題」→「+ 課題を追加」をタップします。",
      guide_s3_title: "3. 撮影して提出",
      guide_s3_desc: "ノートやプリントの写真を撮り、「提出」ボタンを押して完了です。",

      ws_header_title: "プリント・PDFライブラリ",
      ws_header_sub: "Googleドライブに追加された教材が自動でここに表示されます。",
      ws_view_list: "リスト表示",
      ws_view_grid: "グリッド表示",
      ws_pending: "ドライブフォルダが未接続です。<code>config.js</code> に <code>driveFolderId</code> を設定してください（共有設定は「リンクを知っている全員」）。",

      vid_header_title: "TES 動画ライブラリ",
      vid_header_sub: "単元の復習動画、発音練習、リスニング教材を視聴できます。",
      vid_filter_all: "すべて",
      vid_filter_stories: "ストーリー",
      vid_filter_diaries: "日記シリーズ",
      vid_filter_reading: "Reading Power",
      vid_filter_kids: "キッズ向け",
      vid_channel_btn: "YouTubeチャンネルを見る (@terakoya1067)",
      vid_jump_label: "エピソードへ移動",
      vid_episode: "エピソード",
      vid_open_yt: "再生リストを開く ↗",
      vid_pending: "YouTube再生リストが未接続です。<code>config.js</code> に <code>youtubeId</code> を入力してください。",

      footer_copy: "© " + new Date().getFullYear() + " Terakoya English Studio (TES). All rights reserved."
    }
  };

  let currentLang = localStorage.getItem(STORAGE_KEY) || cfg.defaultLang || "en";
  let currentHwFilter = "all";
  let currentWsFilter = "all";
  let currentWsView = "list";
  let currentVidFilter = "all";

  function t(key) {
    return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;
  }

  function applyStaticTranslations() {
    document.documentElement.lang = currentLang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      el.innerHTML = t(key);
    });
  }

  function renderSchoolInfoAndContact() {
    const emailEl = document.getElementById("school-email");
    const locEl = document.getElementById("school-location");
    const lineWrap = document.getElementById("school-line-wrap");
    const qrWrap = document.getElementById("line-qr-wrap");
    const formWrap = document.getElementById("contact-form-wrap");

    if (emailEl && cfg.school && cfg.school.email) {
      emailEl.innerHTML = `<a href="mailto:${cfg.school.email}" style="text-decoration:underline;text-decoration-color:var(--gold);">${cfg.school.email}</a>`;
    }
    if (locEl && cfg.school) {
      locEl.textContent = currentLang === "ja" ? cfg.school.locationJa : cfg.school.locationEn;
    }
    if (lineWrap && cfg.school) {
      if (cfg.school.lineUrl) {
        lineWrap.innerHTML = `<a class="btn btn-line btn-sm" href="${cfg.school.lineUrl}" target="_blank" rel="noopener">${t("info_line_btn")}</a>`;
      } else {
        lineWrap.innerHTML = `<span>${t("info_line_soon")}</span>`;
      }
    }
    if (qrWrap && cfg.school) {
      if (cfg.school.lineQrImageUrl) {
        qrWrap.innerHTML = `<div class="qr-box"><img src="${cfg.school.lineQrImageUrl}" alt="LINE QR Code"></div>`;
      } else {
        qrWrap.innerHTML = `
          <div class="qr-box" title="${t("info_line_qr_mock")}">
            <svg viewBox="0 0 100 100" width="76" height="76" aria-label="Sample LINE QR Code">
              <rect width="100" height="100" rx="8" fill="#ffffff"/>
              <rect x="8" y="8" width="26" height="26" rx="4" fill="none" stroke="#074738" stroke-width="5"/>
              <rect x="15" y="15" width="12" height="12" rx="2" fill="#06c755"/>
              <rect x="66" y="8" width="26" height="26" rx="4" fill="none" stroke="#074738" stroke-width="5"/>
              <rect x="73" y="15" width="12" height="12" rx="2" fill="#06c755"/>
              <rect x="8" y="66" width="26" height="26" rx="4" fill="none" stroke="#074738" stroke-width="5"/>
              <rect x="15" y="73" width="12" height="12" rx="2" fill="#06c755"/>
              <rect x="42" y="10" width="6" height="6" fill="#074738"/>
              <rect x="52" y="10" width="6" height="6" fill="#074738"/>
              <rect x="42" y="22" width="14" height="6" fill="#074738"/>
              <rect x="10" y="42" width="6" height="14" fill="#074738"/>
              <rect x="22" y="46" width="10" height="6" fill="#074738"/>
              <rect x="40" y="38" width="20" height="20" rx="5" fill="#06c755"/>
              <text x="50" y="51" text-anchor="middle" font-size="8" font-weight="800" fill="#ffffff" font-family="sans-serif">LINE</text>
              <rect x="68" y="42" width="8" height="8" fill="#074738"/>
              <rect x="82" y="42" width="10" height="6" fill="#074738"/>
              <rect x="74" y="54" width="16" height="6" fill="#074738"/>
              <rect x="42" y="66" width="8" height="8" fill="#074738"/>
              <rect x="56" y="66" width="12" height="6" fill="#074738"/>
              <rect x="74" y="68" width="16" height="8" fill="#074738"/>
              <rect x="42" y="82" width="16" height="8" fill="#074738"/>
              <rect x="66" y="82" width="8" height="8" fill="#074738"/>
              <rect x="80" y="82" width="12" height="8" fill="#074738"/>
            </svg>
            <span class="qr-caption">${t("info_line_qr_mock")}</span>
          </div>
        `;
      }
    }
    if (formWrap && cfg.school) {
      if (cfg.school.contactFormEmbedUrl) {
        formWrap.innerHTML = `<div class="embed-frame-wrap"><iframe class="form-iframe" src="${cfg.school.contactFormEmbedUrl}" title="Contact Form">Loading…</iframe></div>`;
      } else {
        formWrap.innerHTML = `<div class="setup-placeholder" data-i18n-html="contact_placeholder">${t("contact_placeholder")}</div>`;
      }
    }
  }

  function badgeClass(cat) {
    if (cat === "jhs") return "badge-jhs";
    if (cat === "hs") return "badge-hs";
    if (cat === "kids") return "badge-kids";
    return "";
  }

  function renderHomeworkCards() {
    const grid = document.getElementById("homework-grid");
    if (!grid || !cfg.classes) return;

    const items = cfg.classes.filter((c) => currentHwFilter === "all" || c.category === currentHwFilter);
    grid.innerHTML = items
      .map((c) => {
        const title = currentLang === "ja" ? `${c.nameJa} (${c.badge})` : c.nameEn;
        const sub = currentLang === "ja" ? c.scheduleJa : c.scheduleEn;
        const btn = c.classroomUrl
          ? `<a class="btn btn-navy" href="${c.classroomUrl}" target="_blank" rel="noopener">${t("open_classroom")} &rarr;</a>`
          : `<button class="btn btn-navy" disabled style="opacity:0.55;cursor:not-allowed;">${t("classroom_pending")}</button>`;

        return `
          <article class="card card-hover">
            <div>
              <span class="badge ${badgeClass(c.category)}">${c.badge}</span>
              <h3>${title}</h3>
              <p>${sub}</p>
            </div>
            ${btn}
          </article>
        `;
      })
      .join("");
  }

  function renderWorksheets() {
    const wrap = document.getElementById("worksheets-list");
    if (!wrap || !cfg.classes) return;

    const items = cfg.classes.filter((c) => c.driveFolderId && (currentWsFilter === "all" || c.category === currentWsFilter));
    wrap.innerHTML = items
      .map((c) => {
        const title = currentLang === "ja" ? `${c.nameJa} (${c.badge})` : `${c.nameEn} (${c.badge})`;
        const content = c.driveFolderId
          ? `<div class="embed-frame-wrap"><iframe class="drive-iframe" src="https://drive.google.com/embeddedfolderview?id=${encodeURIComponent(c.driveFolderId)}#${currentWsView}" title="${title}"></iframe></div>`
          : `<div class="setup-placeholder">${t("ws_pending")}</div>`;

        return `
          <section style="margin-bottom: 32px;">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
              <span class="badge ${badgeClass(c.category)}" style="margin:0;">${c.badge}</span>
              <h2 class="section-title" style="margin:0;font-size:1.2rem;">${title}</h2>
            </div>
            ${content}
          </section>
        `;
      })
      .join("");
  }

  const ytPlayers = {};
  let ytApiLoading = false;

  function initYouTubePlayers(items) {
    const attachPlayers = () => {
      items.forEach((v) => {
        if (!v.youtubeId) return;
        const iframeId = `yt-player-${v.id}`;
        const el = document.getElementById(iframeId);
        if (!el || !window.YT || !window.YT.Player) return;

        ytPlayers[v.id] = new window.YT.Player(iframeId, {});
      });
    };

    if (window.YT && window.YT.Player) {
      attachPlayers();
    } else {
      window.onYouTubeIframeAPIReady = () => {
        attachPlayers();
      };
      if (!ytApiLoading) {
        ytApiLoading = true;
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
      }
    }
  }

  function renderVideos() {
    const channelWrap = document.getElementById("yt-channel-wrap");
    if (channelWrap && cfg.school && cfg.school.youtubeChannelUrl) {
      channelWrap.innerHTML = `<a class="btn btn-primary btn-sm" href="${cfg.school.youtubeChannelUrl}" target="_blank" rel="noopener">📺 ${t("vid_channel_btn")} &rarr;</a>`;
    }

    const grid = document.getElementById("videos-grid");
    if (!grid || !cfg.videos) return;

    const items = cfg.videos.filter((v) => {
      if (currentVidFilter === "all") return true;
      return Array.isArray(v.category) ? v.category.includes(currentVidFilter) : v.category === currentVidFilter;
    });
    grid.innerHTML = items
      .map((v) => {
        const title = currentLang === "ja" ? v.titleJa : v.titleEn;
        const desc = currentLang === "ja" ? v.descJa : v.descEn;
        const primaryCat = Array.isArray(v.category) ? v.category[0] : v.category;
        const catLabel = Array.isArray(v.category) ? v.category.join(" · ").toUpperCase() : v.category.toUpperCase();
        let embedHtml = "";
        let controlsHtml = "";

        if (v.youtubeId) {
          const src =
            v.type === "playlist"
              ? `https://www.youtube.com/embed/videoseries?list=${encodeURIComponent(v.youtubeId)}&enablejsapi=1`
              : `https://www.youtube.com/embed/${encodeURIComponent(v.youtubeId)}?enablejsapi=1`;
          embedHtml = `<div class="video-ratio"><iframe id="yt-player-${v.id}" src="${src}" title="${title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;

          if (v.type === "playlist") {
            let selectHtml = "";
            if (Array.isArray(v.episodes) && v.episodes.length > 0) {
              const options = v.episodes
                .map((epTitle, i) => `<option value="${i + 1}">${epTitle}</option>`)
                .join("");
              selectHtml = `
                <label class="episode-jump">
                  <span>${t("vid_jump_label")}:</span>
                  <select class="episode-select" data-video-id="${v.id}" data-playlist="${v.youtubeId}">
                    ${options}
                  </select>
                </label>
              `;
            } else if (v.episodeCount && v.episodeCount > 1) {
              const options = Array.from({ length: v.episodeCount }, (_, i) => {
                const ep = i + 1;
                return `<option value="${ep}">${t("vid_episode")} ${ep}</option>`;
              }).join("");
              selectHtml = `
                <label class="episode-jump">
                  <span>${t("vid_jump_label")}:</span>
                  <select class="episode-select" data-video-id="${v.id}" data-playlist="${v.youtubeId}">
                    ${options}
                  </select>
                </label>
              `;
            }
            controlsHtml = `
              <div class="video-controls">
                ${selectHtml}
                <a class="yt-playlist-link" href="https://www.youtube.com/playlist?list=${encodeURIComponent(v.youtubeId)}" target="_blank" rel="noopener">${t("vid_open_yt")}</a>
              </div>
            `;
          }
        } else {
          embedHtml = `<div class="setup-placeholder" style="margin-top:8px;">${t("vid_pending")}</div>`;
        }

        return `
          <article class="card">
            <div>
              <span class="badge ${badgeClass(primaryCat)}">${catLabel}</span>
              <h3>${title}</h3>
              <p>${desc}</p>
            </div>
            <div>
              ${embedHtml}
              ${controlsHtml}
            </div>
          </article>
        `;
      })
      .join("");

    initYouTubePlayers(items);

    grid.querySelectorAll(".episode-select").forEach((sel) => {
      sel.addEventListener("change", () => {
        const vidId = sel.getAttribute("data-video-id");
        const epIndex = parseInt(sel.value, 10) - 1;
        const player = ytPlayers[vidId];
        if (player && typeof player.playVideoAt === "function") {
          player.playVideoAt(epIndex);
        }
      });
    });

    if (cfg.school && cfg.school.youtubeApiKey) {
      const apiKey = cfg.school.youtubeApiKey;
      items.forEach((v) => {
        if (v.type !== "playlist" || !v.youtubeId) return;
        const sel = grid.querySelector(`.episode-select[data-video-id="${v.id}"]`);
        if (!sel) return;

        const cacheKey = `tes_yt_pl_${v.youtubeId}`;
        const cached = sessionStorage.getItem(cacheKey);
        if (cached) {
          try {
            const titles = JSON.parse(cached);
            sel.innerHTML = titles.map((title, i) => `<option value="${i + 1}">${title}</option>`).join("");
            return;
          } catch (e) {}
        }

        fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${encodeURIComponent(
            v.youtubeId
          )}&key=${encodeURIComponent(apiKey)}`
        )
          .then((r) => (r.ok ? r.json() : null))
          .then((data) => {
            if (!data || !Array.isArray(data.items) || data.items.length === 0) return;
            const titles = data.items.map((item) => item.snippet.title);
            sessionStorage.setItem(cacheKey, JSON.stringify(titles));
            sel.innerHTML = titles.map((title, i) => `<option value="${i + 1}">${title}</option>`).join("");
          })
          .catch(() => {});
      });
    }
  }

  function renderAll() {
    applyStaticTranslations();
    renderSchoolInfoAndContact();
    renderHomeworkCards();
    renderWorksheets();
    renderVideos();
  }

  function initEvents() {
    const langBtn = document.getElementById("lang-toggle");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        currentLang = currentLang === "en" ? "ja" : "en";
        localStorage.setItem(STORAGE_KEY, currentLang);
        renderAll();
      });
    }

    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    if (menuBtn && navLinks) {
      menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");
      });
    }

    document.querySelectorAll("[data-hw-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-hw-filter]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentHwFilter = btn.getAttribute("data-hw-filter");
        renderHomeworkCards();
      });
    });

    document.querySelectorAll("[data-ws-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-ws-filter]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentWsFilter = btn.getAttribute("data-ws-filter");
        renderWorksheets();
      });
    });

    document.querySelectorAll("[data-ws-view]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-ws-view]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentWsView = btn.getAttribute("data-ws-view");
        renderWorksheets();
      });
    });

    document.querySelectorAll("[data-vid-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-vid-filter]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentVidFilter = btn.getAttribute("data-vid-filter");
        renderVideos();
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initEvents();
    renderAll();
  });
})();
