// ফর্ম ডাটা রিসেট করবে

function newForm() {
    document.getElementById("Form").reset();
}

function searchID() {
    // সার্চ করার কোড এখানে থাকবে
    // উদাহরণস্বরূপ, সব ইনপুট ফিল্ডকে শুধু প্রদর্শনযোগ্য করে তুলবে

    const fields = document.querySelectorAll('.form-field');
    fields.forEach(field => {
        field.readOnly = true; // ইনপুট ফিল্ডগুলো শুধুমাত্র প্রদর্শনযোগ্য হবে
        field.classList.add('readonly-field'); // readonly-field ক্লাস যোগ করবে
    });
}

function editForm() {
    // এডিট করার কোড এখানে থাকবে
    // উদাহরণস্বরূপ, সব ইনপুট ফিল্ডকে সম্পাদনযোগ্য করে তুলবে

    const fields = document.querySelectorAll('.form-field');
    fields.forEach(field => {
        field.readOnly = false; // ইনপুট ফিল্ডগুলো সম্পাদনযোগ্য হবে
        field.classList.remove('readonly-field'); // readonly-field ক্লাস সরিয়ে দেবে
    });
}