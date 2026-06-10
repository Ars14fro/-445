const questions = [
  // Блок 1. Разогрев и рофлы
  { id: 1, type: "text", text: "Какую самую странную еду ты обожаешь, а другие ненавидят?" },
  { id: 2, type: "text", text: "Твоя самая нелепая детская травма или падение?" },
  { id: 3, type: "text", text: "Если бы тебе пришлось слушать только одну песню всю оставшуюся жизнь, что бы это было?" },
  { id: 4, type: "text", text: "Веришь в призраков, домовых или инопланетян?" },
  { id: 5, type: "text", text: "Если бы ты была животным, то каким и почему?" },
  { id: 6, type: "text", text: "Твоя самая бесполезная суперспособность?" },
  { id: 7, type: "text", text: "Какой напитокяя(кроме кофе) тебе очень нравится?" },
  { id: 8, type: "text", text: "Как бы ты назвала своего клона?" },
  { id: 9, type: "text", text: "Какой самый тупой слух или факт ты слышала о себе?" },
  { id: 10, type: "text", text: "Если бы ты могла на один день стать невидимкой, что бы ты сделала?" },

  // Блок 2. Или / Или
  { id: 11, type: "choice", text: "Что ты выберешь?", optionA: "Лето без интернета", optionB: "Зима без отопления" },
  { id: 12, type: "choice", text: "Что круче?", optionA: "Уметь летать", optionB: "Уметь читать мысли" },
  { id: 13, type: "choice", text: "Как лучше смотреть?", optionA: "Весь сезон за ночь", optionB: "По серии в неделю" },
  { id: 14, type: "choice", text: "Твоя страсть?", optionA: "Сладкое", optionB: "Соленое" },
  { id: 15, type: "choice", text: "Кто милее?", optionA: "Кошки", optionB: "Собаки" },
  { id: 16, type: "choice", text: "Идеальный дом?", optionA: "Домик в лесу", optionB: "Пентхаус в мегаполисе" },
  { id: 17, type: "choice", text: "Твой выбор?", optionA: "Всегда говорить правду", optionB: "Всегда молчать" },
  { id: 18, type: "choice", text: "Что полезнее?", optionA: "Знать всё на свете", optionB: "Бесконечные деньги" },
  { id: 19, type: "choice", text: "Твоя привычка?", optionA: "Опоздать на час", optionB: "Прийти на час раньше" },
  { id: 20, type: "choice", text: "От чего сложнее отказаться?", optionA: "Никогда не смотреть кино", optionB: "Никогда не слушать музыку" },

  // Блок 3. Интересы и вайб
  { id: 21, type: "text", text: "Какой самый смешной сон ты помнишь?" },
  { id: 22, type: "text", text: "Если бы ты могла телепортироваться куда угодно прямо сейчас, куда бы мы рванули?" },
  { id: 23, type: "text", text: "Что ты выберишь:погулять вместе или посидеть дома вдвоем и почему?" },
  { id: 24, type: "text", text: "Твоя любимая часть дня и почему?" },
  { id: 25, type: "text", text: "Назови три вещи, которые ВСЕГДА есть у тебя в рюкзаке или сумке." },
  { id: 26, type: "text", text: "Какую книгу ты бы заставила прочитать всех людей в мире,о чем она?" },
  { id: 27, type: "text", text: "Твой идеальный выходной — опиши его пошагово." },
  { id: 28, type: "text", text: "В какую историческую эпоху или в какой фильм ты бы хотела попасть на один день?" },
  { id: 29, type: "text", text: "Какое твое самое любимое время года и почему именно оно?" },
  { id: 30, type: "text", text: "Какое хобби ты бы хотела попробовать, но пока тупо не дошли руки?" },

  // Блок 4. Немного о жизни
  { id: 31, type: "text", text: "Что тебя может выбесить в человеке за одну секунду?" },
  { id: 32, type: "text", text: "Какое качество в людях ты ценишь больше всего?" },
  { id: 33, type: "text", text: "Ты скорее интроверт (любишь тишину) или экстраверт (любишь тусовки)?" },
  { id: 34, type: "text", text: "Как ты понимаешь, что человек стал твоим настоящим другом?" },
  { id: 35, type: "text", text: "Веришь ли ты в судьбу или в то, что мы всё решаем сами?" },
  { id: 36, type: "text", text: "На что тебе вообще не жалко тратить деньги?" },
  { id: 37, type: "text", text: "Ты любишь крупные компании(4-7ь человек) или маленькие(2-3 человека)?" },
  { id: 38, type: "text", text: "Твое самое теплое воспоминание за этот год?" },
  { id: 39, type: "text", text: "Если бы ты писала книгу или снимала сериал, о чем бы там был сюжет?" },
  { id: 40, type: "text", text: "Какая твоя главная цель на это лето?" },

  // Блок 5. О вас двоих
  { id: 41, type: "text", text: "Какое у тебя было самое первое впечатление обо мне, когда мы только познакомились в школе(если не помнишь,то в начале года)?", image: "photo1.jpg" },
  { id: 42, type: "text", text: "Как думаешь, в чем мы с тобой больше всего похожи?" },
  { id: 43, type: "text", text: "В чем мы с тобой абсолютно разные?" },
  { id: 44, type: "text", text: "Самый смешной момент со мной?", image: "photo2.jpg" },
  { id: 45, type: "text", text: "Расскажи твою самую интересную привычку" },
  { id: 46, type: "text", text: "Ты любишь больше говорить или слушать, когда мы общаемся?" },
  { id: 47, type: "text", text: "Что по твоему мнению мне будет интересно с тобой делать?" },
  { id: 48, type: "text", text: "Как ты понимаешь, что нравишься человеку?" },
  { id: 49, type: "text", text: "Кто из нас двоих, по-твоему, более упрямый?" },
  { id: 50, type: "text", text: "Если бы мы прямо сейчас пошли в магазин, какую вкусняшку ты бы заставила меня тебе купить?" }
];

const ASSETS = {
  punkt3: "пункт 3.jpg",
  chinazes: "чиназес.jpg",
  cowboy: "смешное фото.jpg",
  wink: "подмиг.mp4",
  lana: "lana.jpg"
};

const PHOTO_STORAGE_KEY = "couplePhoto";
const MAGNIY_MUTE_DELAY = 8000;

const state = {
  currentIndex: 0,
  skipCount: 0,
  chinazesShown: false,
  cowboyShown: false,
  winkShown: false,
  isAnimating: false,
  bgStarted: false,
  skipModalShown: false,
  couplePhoto: null,
  cameraStream: null,
  pendingPhoto: null,
  magniyMuteTimer: null,
  magniyFadeFrame: null,
  bgVolume: 0.35
};

const $ = (sel) => document.querySelector(sel);

const els = {
  bgLayer: $("#bg-layer"),
  coupleAvatar: $("#couple-avatar"),
  coupleAvatarImg: $("#couple-avatar-img"),
  startPhotoPreview: $("#start-photo-preview"),
  startPhotoImg: $("#start-photo-img"),
  btnTakePhoto: $("#btn-take-photo"),
  btnRetakePhoto: $("#btn-retake-photo"),
  screenCamera: $("#screen-camera"),
  screenCameraPreview: $("#screen-camera-preview"),
  cameraVideo: $("#camera-video"),
  cameraCanvas: $("#camera-canvas"),
  cameraPreviewImg: $("#camera-preview-img"),
  btnCameraCancel: $("#btn-camera-cancel"),
  btnCameraCapture: $("#btn-camera-capture"),
  btnCameraRetake: $("#btn-camera-retake"),
  btnCameraSave: $("#btn-camera-save"),
  screenStart: $("#screen-start"),
  screenGame: $("#screen-game"),
  screenFinal: $("#screen-final"),
  questionCard: $("#question-card"),
  questionCounter: $("#question-counter"),
  questionText: $("#question-text"),
  questionImageWrap: $("#question-image-wrap"),
  questionImage: $("#question-image"),
  actionsText: $("#actions-text"),
  actionsChoice: $("#actions-choice"),
  btnStart: $("#btn-start"),
  btnNext: $("#btn-next"),
  btnSkip: $("#btn-skip"),
  btnChoiceA: $("#btn-choice-a"),
  btnChoiceB: $("#btn-choice-b"),
  btnSkipChoice: $("#btn-skip-choice"),
  btnMagniy: $("#btn-magniy"),
  btnArseniy: $("#btn-arseniy"),
  overlayImage: $("#overlay-image"),
  overlayImg: $("#overlay-img"),
  overlayCaption: $("#overlay-caption"),
  overlayImageClose: $("#overlay-image-close"),
  overlayVideo: $("#overlay-video"),
  overlayVid: $("#overlay-vid"),
  overlayVideoClose: $("#overlay-video-close"),
  overlayLana: $("#overlay-lana"),
  modalSkip: $("#modal-skip"),
  modalSkipClose: $("#modal-skip-close"),
  toast: $("#toast"),
  pillRain: $("#pill-rain"),
  audioBg: $("#audio-bg"),
  audioClick: $("#audio-click"),
  audioSkip: $("#audio-skip"),
  audioMagniy: $("#audio-magniy")
};

function playSound(audio) {
  if (!audio) return;
  audio.currentTime = 0;
  audio.play().catch(() => {});
}

function startBgMusic() {
  if (state.bgStarted) return;
  state.bgStarted = true;
  els.audioBg.volume = state.bgVolume;
  els.audioBg.play().catch(() => {});
}

function muteAllAudioAfterDelay(delayMs) {
  clearTimeout(state.magniyMuteTimer);
  if (state.magniyFadeFrame) {
    cancelAnimationFrame(state.magniyFadeFrame);
    state.magniyFadeFrame = null;
  }

  state.magniyMuteTimer = setTimeout(() => {
    const audios = [els.audioMagniy, els.audioBg];
    const startVolumes = audios.map((a) => a.volume);
    const fadeDuration = 1200;
    const fadeStart = performance.now();

    const fade = (now) => {
      const progress = Math.min((now - fadeStart) / fadeDuration, 1);
      const factor = 1 - progress;
      audios.forEach((audio, i) => {
        audio.volume = startVolumes[i] * factor;
      });
      if (progress < 1) {
        state.magniyFadeFrame = requestAnimationFrame(fade);
      } else {
        audios.forEach((audio) => {
          audio.pause();
          audio.volume = 0;
        });
        state.magniyFadeFrame = null;
      }
    };

    state.magniyFadeFrame = requestAnimationFrame(fade);
  }, delayMs);
}

function applyCouplePhoto(dataUrl) {
  if (!dataUrl) return;
  state.couplePhoto = dataUrl;
  sessionStorage.setItem(PHOTO_STORAGE_KEY, dataUrl);

  els.bgLayer.classList.add("has-couple-photo");
  els.bgLayer.style.backgroundImage =
    `linear-gradient(160deg, rgba(10,10,18,0.82) 0%, rgba(26,16,40,0.78) 45%, rgba(13,21,32,0.85) 100%), url("${dataUrl}")`;

  els.startPhotoImg.src = dataUrl;
  els.startPhotoPreview.classList.remove("hidden");
  els.coupleAvatarImg.src = dataUrl;
  els.coupleAvatar.classList.remove("hidden");
  els.btnTakePhoto.classList.add("hidden");
  els.btnRetakePhoto.classList.remove("hidden");
}

function loadCouplePhoto() {
  const saved = sessionStorage.getItem(PHOTO_STORAGE_KEY);
  if (saved) applyCouplePhoto(saved);
}

async function stopCamera() {
  if (state.cameraStream) {
    state.cameraStream.getTracks().forEach((track) => track.stop());
    state.cameraStream = null;
  }
  els.cameraVideo.srcObject = null;
}

async function openCamera() {
  await stopCamera();
  els.screenCamera.classList.remove("hidden");
  els.screenCameraPreview.classList.add("hidden");

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user", width: { ideal: 1280 }, height: { ideal: 960 } },
      audio: false
    });
    state.cameraStream = stream;
    els.cameraVideo.srcObject = stream;
    await els.cameraVideo.play();
  } catch {
    els.screenCamera.classList.add("hidden");
    showToast("Не удалось открыть камеру");
  }
}

function capturePhoto() {
  const video = els.cameraVideo;
  const canvas = els.cameraCanvas;
  if (!video.videoWidth) return;

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d");

  ctx.translate(canvas.width, 0);
  ctx.scale(-1, 1);
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  ctx.fillStyle = "rgba(255, 105, 180, 0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  state.pendingPhoto = canvas.toDataURL("image/jpeg", 0.82);
  els.cameraPreviewImg.src = state.pendingPhoto;

  stopCamera();
  els.screenCamera.classList.add("hidden");
  els.screenCameraPreview.classList.remove("hidden");
}

function saveCouplePhoto() {
  if (!state.pendingPhoto) return;
  playSound(els.audioClick);
  applyCouplePhoto(state.pendingPhoto);
  state.pendingPhoto = null;
  els.screenCameraPreview.classList.add("hidden");
}

function retakePhoto() {
  playSound(els.audioClick);
  state.pendingPhoto = null;
  openCamera();
}

function closeCamera() {
  playSound(els.audioClick);
  stopCamera();
  els.screenCamera.classList.add("hidden");
  els.screenCameraPreview.classList.add("hidden");
  state.pendingPhoto = null;
}

function fireConfetti() {
  if (typeof confetti !== "function") return;

  const burst = (opts) => confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.65 },
    ...opts
  });

  burst();
  setTimeout(() => burst({ particleCount: 50, spread: 100, origin: { x: 0.2, y: 0.7 } }), 200);
  setTimeout(() => burst({ particleCount: 50, spread: 100, origin: { x: 0.8, y: 0.7 } }), 400);
}

function showScreen(name) {
  els.screenStart.classList.toggle("screen-active", name === "start");
  els.screenGame.classList.toggle("screen-active", name === "game");
  els.screenFinal.classList.toggle("screen-active", name === "final");

  if (name === "final") {
    fireConfetti();
  }
}

function getCurrentQuestion() {
  return questions[state.currentIndex];
}

function renderQuestion() {
  const q = getCurrentQuestion();
  if (!q) return;

  els.questionCounter.textContent = `${q.id} / ${questions.length}`;
  els.questionText.textContent = q.text;

  if (q.image) {
    els.questionImage.src = q.image;
    els.questionImageWrap.classList.remove("hidden");
  } else {
    els.questionImageWrap.classList.add("hidden");
    els.questionImage.src = "";
  }

  const isChoice = q.type === "choice";
  els.actionsText.classList.toggle("hidden", isChoice);
  els.actionsChoice.classList.toggle("hidden", !isChoice);

  if (isChoice) {
    els.btnChoiceA.textContent = q.optionA;
    els.btnChoiceB.textContent = q.optionB;
  }

  els.questionCard.classList.remove("swipe-out-left", "swipe-out-right");
  els.questionCard.style.opacity = "0";
  els.questionCard.style.transform = "translateY(30px)";

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      els.questionCard.style.transition = "opacity 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.4,0,0.2,1)";
      els.questionCard.style.opacity = "1";
      els.questionCard.style.transform = "translateY(0)";
    });
  });
}

function animateCardOut(direction) {
  return new Promise((resolve) => {
    state.isAnimating = true;
    els.questionCard.style.transition = "";
    els.questionCard.classList.add(direction === "left" ? "swipe-out-left" : "swipe-out-right");
    setTimeout(() => {
      state.isAnimating = false;
      resolve();
    }, 500);
  });
}

function showImageOverlay(src, caption, autoCloseMs) {
  return new Promise((resolve) => {
    els.overlayImg.src = src;
    if (caption) {
      els.overlayCaption.textContent = caption;
      els.overlayCaption.classList.remove("hidden");
    } else {
      els.overlayCaption.classList.add("hidden");
    }
    els.overlayImageClose.classList.toggle("hidden", !!autoCloseMs);
    els.overlayImage.classList.remove("hidden");

    let resolved = false;
    const close = () => {
      if (resolved) return;
      resolved = true;
      els.overlayImage.classList.add("hidden");
      els.overlayImageClose.classList.remove("hidden");
      els.overlayImageClose.removeEventListener("click", close);
      els.overlayImage.querySelector(".overlay-backdrop").removeEventListener("click", close);
      resolve();
    };

    els.overlayImageClose.addEventListener("click", close);
    els.overlayImage.querySelector(".overlay-backdrop").addEventListener("click", close);

    if (autoCloseMs) {
      setTimeout(close, autoCloseMs);
    }
  });
}

function showVideoOverlay(src) {
  return new Promise((resolve) => {
    const vid = els.overlayVid;
    vid.src = src;
    vid.loop = false;
    vid.muted = false;
    els.overlayVideo.classList.remove("hidden");

    let resolved = false;
    const close = () => {
      if (resolved) return;
      resolved = true;
      vid.pause();
      vid.src = "";
      els.overlayVideo.classList.add("hidden");
      vid.removeEventListener("ended", close);
      els.overlayVideoClose.removeEventListener("click", close);
      els.overlayVideo.querySelector(".overlay-backdrop").removeEventListener("click", close);
      resolve();
    };

    vid.addEventListener("ended", close);
    els.overlayVideoClose.addEventListener("click", close);
    els.overlayVideo.querySelector(".overlay-backdrop").addEventListener("click", close);
    vid.play().catch(() => close());
  });
}

function showSkipModal() {
  if (state.skipModalShown) return;
  state.skipModalShown = true;
  els.modalSkip.classList.remove("hidden");
}

function hideSkipModal() {
  els.modalSkip.classList.add("hidden");
}

function showToast(message, duration = 3000) {
  els.toast.querySelector("span").textContent = message;
  els.toast.classList.remove("hidden");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    els.toast.classList.add("hidden");
  }, duration);
}

function spawnPillRain() {
  els.pillRain.innerHTML = "";
  const count = 18;
  for (let i = 0; i < count; i++) {
    const pill = document.createElement("span");
    pill.className = "pill-emoji";
    pill.textContent = "💊";
    pill.style.left = `${Math.random() * 100}%`;
    pill.style.animationDuration = `${2 + Math.random() * 2}s`;
    pill.style.animationDelay = `${Math.random() * 0.8}s`;
    els.pillRain.appendChild(pill);
  }
  setTimeout(() => { els.pillRain.innerHTML = ""; }, 4500);
}

async function handleSkip() {
  if (state.isAnimating) return;
  playSound(els.audioSkip);
  state.skipCount++;

  if (!state.cowboyShown) {
    state.cowboyShown = true;
    await showImageOverlay(ASSETS.cowboy, "Ладно, ковбой...", 1800);
  }

  if (state.skipCount >= 3) {
    showSkipModal();
  }

  await goToNext("right");
}

async function handleAdvance(fromChoice) {
  if (state.isAnimating) return;
  playSound(els.audioClick);

  const q = getCurrentQuestion();

  if (q && q.id === 45 && !state.chinazesShown) {
    state.chinazesShown = true;
    await showImageOverlay(ASSETS.chinazes);
  }

  const direction = fromChoice ? "left" : "left";
  await goToNext(direction);
}

async function goToNext(swipeDirection) {
  const q = getCurrentQuestion();

  if (q && q.id === 10 && !state.winkShown) {
    state.winkShown = true;
    await animateCardOut(swipeDirection);
    state.currentIndex++;
    if (state.currentIndex >= questions.length) {
      showScreen("final");
      return;
    }
    await showVideoOverlay(ASSETS.wink);
    renderQuestion();
    return;
  }

  await animateCardOut(swipeDirection);
  state.currentIndex++;

  if (state.currentIndex >= questions.length) {
    showScreen("final");
    return;
  }

  const nextQ = getCurrentQuestion();
  if (nextQ && nextQ.id === 2) {
    await showImageOverlay(ASSETS.punkt3, null, 2500);
  }

  renderQuestion();
}

function onMagniyClick() {
  els.audioMagniy.volume = 1;
  playSound(els.audioMagniy);
  spawnPillRain();
  showToast("Пульс снижен, продолжаем!");
  muteAllAudioAfterDelay(MAGNIY_MUTE_DELAY);
}

function onStartClick() {
  playSound(els.audioClick);
  startBgMusic();
  showScreen("game");
  renderQuestion();
}

function onArseniyClick() {
  playSound(els.audioClick);
  els.overlayLana.classList.remove("hidden");
}

function init() {
  loadCouplePhoto();

  els.btnStart.addEventListener("click", onStartClick);
  els.btnTakePhoto.addEventListener("click", () => {
    playSound(els.audioClick);
    openCamera();
  });
  els.btnRetakePhoto.addEventListener("click", () => {
    playSound(els.audioClick);
    openCamera();
  });
  els.btnCameraCancel.addEventListener("click", closeCamera);
  els.btnCameraCapture.addEventListener("click", () => {
    playSound(els.audioClick);
    capturePhoto();
  });
  els.btnCameraRetake.addEventListener("click", retakePhoto);
  els.btnCameraSave.addEventListener("click", saveCouplePhoto);
  els.btnNext.addEventListener("click", () => handleAdvance(false));
  els.btnSkip.addEventListener("click", handleSkip);
  els.btnSkipChoice.addEventListener("click", handleSkip);
  els.btnChoiceA.addEventListener("click", () => handleAdvance(true));
  els.btnChoiceB.addEventListener("click", () => handleAdvance(true));
  els.btnMagniy.addEventListener("click", onMagniyClick);
  els.btnArseniy.addEventListener("click", onArseniyClick);
  els.modalSkipClose.addEventListener("click", () => {
    playSound(els.audioClick);
    hideSkipModal();
  });
  els.modalSkip.querySelector(".modal-backdrop").addEventListener("click", hideSkipModal);
}

init();
