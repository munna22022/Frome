function handleSubmit(event) {
    event.preventDefault();  // ফর্মের ডিফল্ট সাবমিশন প্রতিরোধ

    // লোডিং স্পিনার দেখান
    document.getElementById("loading").classList.remove("hidden");

    // ফর্ম ডাটা সংগ্রহ করুন
    var form = document.getElementById("Form");
    var formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData,
        mode: "cors"  // সংশোধন করা হয়েছে
    })
    .then(response => response.json())  // JSON আউটপুট পার্স করুন
    .then(data => {
        // ID কনসোলে লগ করুন
        console.log("Form submitted successfully, ID:", data.id);

        // লোডিং স্পিনার লুকান
        document.getElementById("loading").classList.add("hidden");

        // ID সংরক্ষণ করুন, তারপর পরবর্তী পেজে রিডাইরেক্ট করুন
        localStorage.setItem('submittedId', data.id);  // ID লোডিং সম্পূর্ণ হওয়ার পর স্থানীয় স্টোরেজে সেভ করুন

        // প্রয়োজনীয় সময় পর রিডাইরেক্ট করুন
        setTimeout(() => {
            window.location.href = "/html/submit.html";
        }, 0); // 2 সেকেন্ড পর রিডাইরেক্ট
    })
    .catch(error => {
        console.error("Error!", error.message);
        // লোডিং স্পিনার লুকান
        document.getElementById("loading").classList.add("hidden");
    });

    return false;  // ফর্মের স্বাভাবিক সাবমিশন বন্ধ করুন
}

