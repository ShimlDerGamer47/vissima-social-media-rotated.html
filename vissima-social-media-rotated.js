document.addEventListener("DOMContentLoaded", () => {
  try {
    const html = document.documentElement;
    const body = document.body;

    const params = new URLSearchParams(window.location.search);

    function parseBoolParam(name, defaultVal) {
      if (!params.has(name)) return defaultVal;
      const v = (params.get(name) || "").trim().toLowerCase();
      if (v === "1" || v === "true" || v === "yes") return true;
      if (v === "0" || v === "false" || v === "no") return false;
      return defaultVal;
    }

    function parseNumberParam(name, defaultVal) {
      if (!params.has(name)) return defaultVal;
      const v = parseFloat(params.get(name));
      return Number.isFinite(v) ? v : defaultVal;
    }

    const AUTO_START = parseBoolParam(
      "autostart",
      parseBoolParam("autoplay", true)
    );
    const initialDelayMinutes = Math.max(0, parseNumberParam("delay", 0));
    const displaySeconds = parseFloat(params.get("duration")) || 5;

    const MINUTES_TO_MS = 60 * 1000;
    const INITIAL_DELAY_MS = Math.round(initialDelayMinutes * MINUTES_TO_MS);
    const DISPLAY_STAY = displaySeconds * 1000;
    const PAUSE_MS = 2000;
    const restartMs = 200;
    const WAIT_CHUNK = 50;
    const PRELOAD_TIMEOUT = 500;
    const ANIM_MS = 2000;
    const VISIBLE_MS = Math.max(DISPLAY_STAY, ANIM_MS);

    function bodySecurityToken() {
      const fontFamilyVar = "--font-family-var";
      const robotoBold = getComputedStyle(html)
        .getPropertyValue(fontFamilyVar)
        .trim();
      if (robotoBold) body.style.fontFamily = robotoBold;

      Object.assign(body.style, {
        webkitUserSelect: "none",
        userSelect: "none",
        cursor: "default",
        pointerEvents: "none",
      });

      const eventArray = ["copy", "keydown", "dragstart", "select"];
      eventArray.forEach((event) => {
        if (!event) return;
        body.addEventListener(event, (e) => e.preventDefault());
      });

      const dataStyle = {
        webkitUserSelect: "none",
        userSelect: "none",
        cursor: "default",
        pointerEvents: "none",
      };

      const ids = [
        "dcBgImgContainerId",
        "discordImgId",
        "instaImgBgContainerId",
        "instagramImgId",
        "spotifyImgBgContainerId",
        "spotifyImgId",
        "tiktokImgBgContainerId",
        "tiktokImgId",
        "twitterImgBgContainerId",
        "twitterImgId",
        "youtubeImgBgContainerId",
        "youtubeImgId",
        "dcServerNameContainerId",
        "discordServerNameId",
        "instagramNameContainerId",
        "instagramNameId",
        "spotifyNameContainerId",
        "spotifyNameId",
        "tiktokNameContainerId",
        "tiktokNameId",
        "twitterNameContainerId",
        "twitterNameId",
        "youtubeNameContainerId",
        "youtubeNameId",
      ];

      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        eventArray.forEach((ev) => {
          el.addEventListener(ev, (e) => e.preventDefault());
        });
        Object.assign(el.style, dataStyle);
      });
    }
    bodySecurityToken();

    const zero = 0;
    const one = 1;
    const get = (id) => document.getElementById(id);

    const discordImgDiv = get("dcBgImgContainerId");
    const discordName = get("discordServerNameId");

    const instagramImgDiv = get("instaImgBgContainerId");
    const instagramName = get("instagramNameId");

    const spotifyImgDiv = get("spotifyImgBgContainerId");
    const spotifyName = get("spotifyNameId");

    const tiktokImgDiv = get("tiktokImgBgContainerId");
    const tiktokName = get("tiktokNameId");

    const twitterImgDiv = get("twitterImgBgContainerId");
    const twitterName = get("twitterNameId");

    const youtubeImgDiv = get("youtubeImgBgContainerId");
    const youtubeName = get("youtubeNameId");

    function zIndexStyleToken() {
      const discordDiv = get("discordContainerId");
      const dcServerNameDiv = get("dcServerNameContainerId");

      const instagramMainDiv = get("instagramMainContainerId");
      const instagramNameDiv = get("instagramNameContainerId");

      const spotifyMainDiv = get("spotifyMainContainerId");
      const spotifyNameDiv = get("spotifyNameContainerId");

      const tiktokMainDiv = get("tiktokMainContainerId");
      const tiktokNameDiv = get("tiktokNameContainerId");

      const twitterMainDiv = get("twitterMainContainerId");
      const twitterNameDiv = get("twitterNameContainerId");

      const youtubeMainDiv = get("youtubeMainContainerId");
      const youtubeNameDiv = get("youtubeNameContainerId");

      const mainDiv = [
        discordDiv,
        instagramMainDiv,
        spotifyMainDiv,
        tiktokMainDiv,
        twitterMainDiv,
        youtubeMainDiv,
      ];

      mainDiv.forEach((el) => {
        if (!el) return;

        el.style.zIndex = 1;
      });

      const nameDiv = [
        dcServerNameDiv,
        instagramNameDiv,
        spotifyNameDiv,
        tiktokNameDiv,
        twitterNameDiv,
        youtubeNameDiv,
      ];

      nameDiv.forEach((el) => {
        if (!el) return;

        el.style.zIndex = 0;
      });
    }
    zIndexStyleToken();

    function randomColorToken() {
      const discordServerName = get("discordServerNameId");
      const instagramName = get("instagramNameId");
      const spotifyName = get("spotifyNameId");
      const tiktokName = get("tiktokNameId");
      const twitterName = get("twitterNameId");
      const youtubeName = get("youtubeNameId");

      const colorRandomToken = () => {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);

        const nameColorEl = [
          discordServerName,
          instagramName,
          spotifyName,
          tiktokName,
          twitterName,
          youtubeName,
        ];

        nameColorEl.forEach((el) => {
          if (!el) return;

          el.style.color = `#${randomColor}`;
          el.style.transition =
            "color 2s cubic-bezier(0.445, 0.05, 0.55, 0.95)";
        });

        const cssUnderline = `
      .underline-slide-in {
        position: relative;
        -webkit-user-select: none;
        user-select: none;
        cursor: default;
        pointer-events: none;
      } 

      .underline-slide-in::after {
        content: "";
        background-color: #${randomColor};
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        transform: scaleX(0);
        transform-origin: center;
        border-radius: 5px;
        -webkit-user-select: none;
        user-select: none;
        cursor: default;
        pointer-events: none;
        animation: slide-in-underline 2s ease-in-out forwards;
        transition: animation 2s ease-in-out, background-color 2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
      } 

      @keyframes slide-in-underline {
        0% {
          transform: scaleX(0);
        } 

        100% {
          transform: scaleX(1);
        }
      } 

      .underline-slide-out {
        position: relative;
        -webkit-user-select: none;
        user-select: none;
        cursor: default;
        pointer-events: none;
      } 

      .underline-slide-out::after {
        content: "";
        background-color: #${randomColor};
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        transform: scaleX(0);
        transform-origin: center;
        border-radius: 5px;
        -webkit-user-select: none;
        user-select: none;
        cursor: default;
        pointer-events: none;
        animation: slide-out-underline 2s ease-in-out forwards;
        transition: animation 2s ease-in-out, background-color 2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
      }

      @keyframes slide-out-underline {
        0% {
          transform: scale(1);
        } 

        100% {
          transform: scaleX(0);
        }
      }
      `;

        const style = document.querySelector("style");
        style.innerHTML = cssUnderline;
        if (!style) console.warn("HTML-Style Tag ist nicht da.");
      };
      colorRandomToken();

      setInterval(colorRandomToken, 1000);
    }
    randomColorToken();

    const CLASSES = [
      "slide-in-img",
      "slide-out-img",
      "slide-in-name",
      "slide-out-name",
      "fade-in",
      "fade-out",
      "underline-slide-in",
      "underline-slide-out",
    ];

    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    const forceReflow = (el) => {
      if (el) void el.offsetWidth;
    };

    const safeAdd = (el, cls) => {
      if (el && cls && !el.classList.contains(cls)) el.classList.add(cls);
    };

    const safeRem = (el, cls) => {
      if (el && cls && el.classList.contains(cls)) el.classList.remove(cls);
    };

    const removeAllClasses = (el) => {
      if (!el) return;
      for (const c of CLASSES) safeRem(el, c);
    };

    const preloadImage = (url, timeout = PRELOAD_TIMEOUT) => {
      if (!url) return Promise.resolve(false);
      return Promise.race([
        new Promise((res) => {
          const img = new Image();
          img.onload = () => res(true);
          img.onerror = () => res(false);
          try {
            img.src = url;
          } catch {
            res(false);
          }
        }),
        new Promise((res) => setTimeout(() => res(false), timeout)),
      ]);
    };

    function initElements() {
      const allEls = [
        discordImgDiv,
        discordName,
        instagramImgDiv,
        instagramName,
        spotifyImgDiv,
        spotifyName,
        tiktokImgDiv,
        tiktokName,
        twitterImgDiv,
        twitterName,
        youtubeImgDiv,
        youtubeName,
      ].filter(Boolean);

      for (const el of allEls) {
        el.style.willChange = "opacity, transform";
        el.style.opacity = 0;
        el.style.visibility = "hidden";
        el.style.pointerEvents = "none";
        removeAllClasses(el);
      }
    }
    initElements();

    const rAFApply = (fn) =>
      new Promise((res) =>
        requestAnimationFrame(() => {
          try {
            fn();
          } catch {}
          res();
        })
      );

    function waitAnimationEnd(el, timeout = ANIM_MS + 750) {
      return new Promise((resolve) => {
        if (!el) return resolve();
        let done = false;

        const onEnd = () => {
          cleanup();
          resolve();
        };

        const cleanup = () => {
          if (done) return;
          done = true;
          el.removeEventListener("animationend", onEnd);
          el.removeEventListener("transitionend", onEnd);
          clearTimeout(timer);
        };

        el.addEventListener("animationend", onEnd);
        el.addEventListener("transitionend", onEnd);

        const timer = setTimeout(() => {
          cleanup();
          resolve();
        }, timeout);
      });
    }

    async function playInPair(imgDiv, nameEl, imgClass, nameClass) {
      if (!imgDiv && !nameEl) return;

      if (imgDiv) {
        removeAllClasses(imgDiv);
        imgDiv.style.visibility = "visible";
        imgDiv.style.opacity = zero;
      }
      if (nameEl) {
        removeAllClasses(nameEl);
        nameEl.style.visibility = "visible";
        nameEl.style.opacity = zero;
      }

      await rAFApply(() => {
        if (imgDiv) forceReflow(imgDiv);
        if (nameEl) forceReflow(nameEl);
      });

      if (imgDiv) {
        imgDiv.style.opacity = one;
        if (imgClass) safeAdd(imgDiv, imgClass);
      }

      await (imgDiv ? waitAnimationEnd(imgDiv) : Promise.resolve());

      if (nameEl) {
        nameEl.style.opacity = one;
        if (nameClass) safeAdd(nameEl, nameClass);
      }

      await (nameEl ? waitAnimationEnd(nameEl) : Promise.resolve());

      if (imgDiv && imgClass) safeRem(imgDiv, imgClass);
      if (nameEl && nameClass) safeRem(nameEl, nameClass);
    }

    async function playOutPair(imgDiv, nameEl, imgOutClass, nameOutClass) {
      if (!imgDiv && !nameEl) return;

      if (imgDiv) removeAllClasses(imgDiv);
      if (nameEl) removeAllClasses(nameEl);

      await rAFApply(() => {
        if (imgDiv) forceReflow(imgDiv);
        if (nameEl) forceReflow(nameEl);
      });

      if (imgDiv && imgOutClass) safeAdd(imgDiv, imgOutClass);
      if (nameEl && nameOutClass) safeAdd(nameEl, nameOutClass);

      await Promise.all([
        imgDiv ? waitAnimationEnd(imgDiv) : Promise.resolve(),
        nameEl ? waitAnimationEnd(nameEl) : Promise.resolve(),
      ]);

      if (imgDiv) {
        imgDiv.style.opacity = zero;
        imgDiv.style.visibility = "hidden";
        if (imgOutClass) safeRem(imgDiv, imgOutClass);
      }
      if (nameEl) {
        nameEl.style.opacity = zero;
        nameEl.style.visibility = "hidden";
        if (nameOutClass) safeRem(nameEl, nameOutClass);
      }
    }

    const steps = [
      {
        key: "discord",
        imgDiv: discordImgDiv,
        name: discordName,
        imgIn: "slide-in-img",
        imgOut: "fade-out",
        nameIn: "slide-in-name",
        nameOut: "fade-out",
      },
      {
        key: "instagram",
        imgDiv: instagramImgDiv,
        name: instagramName,
        imgIn: "fade-in",
        imgOut: "fade-out",
        nameIn: "fade-in",
        nameOut: "fade-out",
      },
      {
        key: "spotify",
        imgDiv: spotifyImgDiv,
        name: spotifyName,
        imgIn: "fade-in",
        imgOut: "fade-out",
        nameIn: "fade-in",
        nameOut: "fade-out",
      },
      {
        key: "tiktok",
        imgDiv: tiktokImgDiv,
        name: tiktokName,
        imgIn: "fade-in",
        imgOut: "fade-out",
        nameIn: "fade-in",
        nameOut: "fade-out",
      },
      {
        key: "twitter",
        imgDiv: twitterImgDiv,
        name: twitterName,
        imgIn: "fade-in",
        imgOut: "fade-out",
        nameIn: "fade-in",
        nameOut: "fade-out",
      },
      {
        key: "youtube",
        imgDiv: youtubeImgDiv,
        name: youtubeName,
        imgIn: "fade-in",
        imgOut: "slide-out-img",
        nameIn: "fade-in",
        nameOut: "slide-out-name",
      },
    ];

    async function prepareNext(idx) {
      const next = steps[idx];
      if (!next || !next.imgDiv) return;

      removeAllClasses(next.imgDiv);
      if (next.name) removeAllClasses(next.name);

      next.imgDiv.style.opacity = zero;
      next.imgDiv.style.visibility = "hidden";
      next.imgDiv.style.pointerEvents = "none";

      if (next.name) {
        next.name.style.opacity = zero;
        next.name.style.visibility = "hidden";
        next.name.style.pointerEvents = "none";
      }
    }

    let stopFlag = false;

    async function waitGuard(ms) {
      const chunk = WAIT_CHUNK;
      let elapsed = 0;
      while (elapsed < ms) {
        if (stopFlag) return false;
        const step = Math.min(chunk, ms - elapsed);
        await wait(step);
        elapsed += step;
      }
      return !stopFlag;
    }

    async function runStep(step, idx) {
      if (!step) return true;

      try {
        await playInPair(step.imgDiv, step.name, step.imgIn, step.nameIn);

        if (step.name) {
          safeAdd(step.name, "underline-slide-in");
          await waitAnimationEnd(step.name);
        }

        if (!(await waitGuard(VISIBLE_MS))) return false;

        if (step.name) {
          safeRem(step.name, "underline-slide-in");
          safeAdd(step.name, "underline-slide-out");
          await waitAnimationEnd(step.name);
          safeRem(step.name, "underline-slide-out");
        }

        await playOutPair(step.imgDiv, step.name, step.imgOut, step.nameOut);

        const nextIdx = (idx + 1) % steps.length;
        await prepareNext(nextIdx);

        if (!(await waitGuard(PAUSE_MS))) return false;

        return true;
      } catch (err) {
        console.error("runStep error:", err);
        return false;
      }
    }

    async function runSequenceOnce(stepsArr) {
      for (let i = 0; i < stepsArr.length; i++) {
        if (stopFlag) return false;
        const ok = await runStep(stepsArr[i], i);
        if (!ok) return false;
      }
      return true;
    }

    async function loopRunner() {
      if (stopFlag) return;
      await runSequenceOnce(steps);
      if (!stopFlag) {
        setTimeout(() => loopRunner(), 100);
      }
    }

    function hardReset() {
      const allEls = [
        discordImgDiv,
        discordName,
        instagramImgDiv,
        instagramName,
        spotifyImgDiv,
        spotifyName,
        tiktokImgDiv,
        tiktokName,
        twitterImgDiv,
        twitterName,
        youtubeImgDiv,
        youtubeName,
      ].filter(Boolean);

      for (const el of allEls) {
        el.style.opacity = zero;
        el.style.visibility = "hidden";
        el.style.pointerEvents = "none";
        removeAllClasses(el);
      }
    }

    function start() {
      if (!steps || steps.length === 0) return;
      stopFlag = false;
      hardReset();
      initElements();
      prepareNext(0).catch(() => {});
      loopRunner().catch(() => {});
    }

    function stop() {
      stopFlag = true;
      hardReset();
    }

    function restart() {
      stop();
      setTimeout(() => start(), restartMs);
    }

    window.__socialRotator = { start, stop, restart };

    if (AUTO_START) {
      setTimeout(() => start(), INITIAL_DELAY_MS);
    }

    console.log(
      "Social Media Rotator geladen!\n\n" +
        "URL Parameter:\n" +
        "/?autoplay=true (oder false)\n" +
        "&delay=0 (Minuten bis Start)\n" +
        "&duration=5 (Sekunden pro Element)\n\n" +
        "Manuelle Steuerung:\n" +
        "' window.__socialRotator.start(); '\n" +
        "' window.__socialRotator.stop(); '\n" +
        "' window.__socialRotator.restart(); '"
    );
  } catch (error) {
    console.error("Fehler beim Script:", error);
  }
});
