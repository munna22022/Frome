document.getElementById("hsc_lavel").addEventListener("change", function() {
    var hscLevel = this.value;
    var groupHsc = document.getElementById("group_hsc");

    // Clear previous options
    groupHsc.innerHTML = '<option value="">Select Group</option>';

    var groups = [];

    switch (hscLevel) {
        case "H.S.C":
            groups = ["Science", "Humanities", "Business Studies"];
            break;
        case "Alim":
            groups = ["Science", "Humanities", "Business Studies"];
            break;
        case "Business Management":
            groups = ["Business Management"];
            break;
        case "Diploma":
            groups = [
                "Architecture and Interior Design Technology", 
                "Architecture Technology", 
                "Automobile Technology", 
                "Ceramic Technology", 
                "Chemical Technology", 
                "Civil (wood) Technology", 
                "Civil Technology", 
                "Computer Science & Technology", 
                "Computer Technology", 
                "Construction Technology", 
                "Data Telecommunication and Network Technology", 
                "Electrical Technology", 
                "Electromedical Technology", 
                "Electronics Technology", 
                "Environmental Technology", 
                "Food Technology", 
                "Glass Technology", 
                "Graphic Design Technology", 
                "Instrumentation & Process Control Technology", 
                "Mechanical Technology", 
                "Marine Technology", 
                "Mechatronics Technology", 
                "Mining & Mine Survey Technology", 
                "Power Technology", 
                "Printing Technology", 
                "Refrigeration & Air Conditioning Technology", 
                "Shipbuilding Technology", 
                "Surveying Technology", 
                "Telecommunication Technology", 
                "Agriculture Technology", 
                "Fisheries Technology", 
                "Livestock Technology", 
                "Poultry Technology", 
                "Textile Technology", 
                "Garments Design & Pattern Making Technology", 
                "Patient Care Technology", 
                "Medicine Technology", 
                "Electro Medical Technology"
            ];
            break;
        case "A Level/Sr. Cambridge":
            groups = ["Science", "Humanities", "Business Studies"];
            break;
        case "H.S.C Equivalent":
            groups = ["Science", "Humanities", "Business Studies"];
            break;
        case "Diploma (Nursing/Midwifery)":
            groups = ["Nursing Science & Midwifery", "Nursing Science", "Midwifery Science", "Staff Nursing"];
            break;
        case "Diploma from MATS":
            groups = ["General"];
            break;
        default:
            groups = [];
            break;
    }

    // Add new options
    groups.forEach(function(group) {
        var option = document.createElement("option");
        option.value = group;
        option.text = group;
        groupHsc.appendChild(option);
    });
});



document.getElementById('graduation_level').addEventListener('change', function() {
    var degreeSelect = document.getElementById('degree_graduation');
    var selectedLevel = this.value;

    // Clear existing options
    degreeSelect.innerHTML = '<option value="">Select Degree/Subject</option>';

    var options = [];

    // Define options based on the selected graduation level
    switch (selectedLevel) {
        case 'B.A.':
            options = [
                'English', 'Bengali', 'History', 'Political Science', 'Philosophy',
                'Sociology', 'Economics', 'Geography', 'Psychology', 'Others'
            ];
            break;
        case 'B.Sc.':
            options = [
                'Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science',
                'Statistics', 'Environmental Science', 'Geology', 'Astronomy', 'Others'
            ];
            break;
        case 'B.Com.':
            options = [
                'Accounting', 'Finance', 'Business Law', 'Economics', 'Marketing',
                'Management', 'Statistics', 'Taxation', 'Human Resource Management', 'Others'
            ];
            break;
        case 'BBA':
            options = [
                'Management', 'Marketing', 'Finance', 'Accounting', 'Human Resource Management',
                'Operations Management', 'Business Law', 'Economics', 'Entrepreneurship', 'Others'
            ];
            break;
        case 'Engineering':
            options = [
                'Civil Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Electronics Engineering',
                'Computer Engineering', 'Chemical Engineering', 'Structural Engineering',
                'Environmental Engineering', 'Aerospace Engineering', 'Others'
            ];
            break;
        case 'Law':
            options = [
                'Constitutional Law', 'Criminal Law', 'Civil Law', 'International Law', 'Property Law',
                'Corporate Law', 'Human Rights Law', 'Environmental Law', 'Labour Law', 'Others'
            ];
            break;
        case 'Agriculture':
            options = [
                'Agronomy', 'Soil Science', 'Horticulture', 'Plant Pathology', 'Entomology',
                'Agricultural Economics', 'Animal Husbandry', 'Crop Science', 'Agricultural Engineering', 'Others'
            ];
            break;
        case 'Medical':
            options = [
                'Anatomy', 'Physiology', 'Biochemistry', 'Pharmacology', 'Pathology',
                'Microbiology', 'Forensic Medicine', 'Community Medicine', 'Surgery', 'Others'
            ];
            break;
        case 'Others':
            options = ['Others'];
            break;
    }

    // Append new options to the select element
    options.forEach(function(option) {
        var opt = document.createElement('option');
        opt.value = option;
        opt.text = option;
        degreeSelect.add(opt);
    });
});




document.getElementById('master_level').addEventListener('change', function() {
    var degreeSelect = document.getElementById('degree_master');
    var selectedLevel = this.value;

    // Clear existing options
    degreeSelect.innerHTML = '<option value="">Select Degree/Subject</option>';

    var options = [];

    // Define options based on the selected master's level
    switch (selectedLevel) {
        case 'M.A':
            options = [
                'Bangla', 'English', 'History', 'Philosophy', 'Islamic Studies',
                'Islamic History and Culture', 'Arabic', 'Pali', 'Sanskrit',
                'Persian', 'Urdu', 'World Religion', 'Fine Arts', 'Folklore',
                'Library & Information Science', 'Language/Linguistics', 'Drama & Music',
                'Archaeology', 'Mass Communication & Journalism', 'Development Studies',
                'Peace & Conflict', 'Women\'s Studies', 'International Relations'
            ];
            break;
        case 'M.S.S':
            options = [
                'Sociology', 'Anthropology', 'Economics', 'Political Science/Government and Politics',
                'Public Administration', 'Psychology', 'Social Welfare/Social Work', 'Population Science',
                'Geography', 'Urban Development', 'Environmental Science', 'Peace & Conflict', 'Women Studies'
            ];
            break;
        case 'M.Sc':
            options = [
                'Physics', 'Chemistry', 'Mathematics', 'Computer Science', 'Statistics', 'Microbiology',
                'Botany', 'Zoology', 'Biochemistry', 'Biotechnology', 'Soil, Water and Environment Science',
                'Marine Science', 'Geology', 'Agricultural Science', 'Environmental Science',
                'Genetic Engineering', 'Horticulture', 'Fisheries', 'Anatomy & Histology', 'Parasitology',
                'Animal Science', 'Crop Botany', 'Food Technology & Rural Industry', 'Farm Power & Machinery',
                'Forestry'
            ];
            break;
        case 'M.Com':
            options = [
                'Accounting', 'Finance', 'Management', 'Marketing', 'Banking', 'Public Finance',
                'Business Administration', 'Applied Economics'
            ];
            break;
        case 'M.B.A':
            options = [
                'Business Administration', 'Management', 'Marketing', 'Finance', 'Human Resource Management',
                'Operations Management', 'International Business'
            ];
            break;
        case 'L.L.M':
            options = [
                'Law/Jurisprudence', 'International Law', 'Human Rights Law', 'Environmental Law', 'Corporate Law',
                'Criminal Law', 'Constitutional Law', 'Labour Law', 'Property Law'
            ];
            break;
        case 'Kamil':
            options = [
                'Hadith', 'Tafsir', 'Akaid', 'Fikha', 'Islamic History and Culture',
                'Islamic Studies', 'Modern Arabic'
            ];
            break;
        case 'Others':
            options = [
                'Information Communication Technology (ICT)', 'Clinical Psychology', 'Medical Technology',
                'Pharmacy', 'Agricultural Engineering', 'Architecture', 'Civil Engineering',
                'Electrical Engineering', 'Mechanical Engineering', 'Chemical Engineering',
                'Tele-Communication Engineering', 'Textile Technology', 'Industrial Engineering',
                'Naval Architecture', 'Urban Planning', 'Regional Planning', 'Structural Engineering',
                'Leather Technology', 'Fisheries Technology', 'Dairy Science', 'Doctor of Veterinary Science'
            ];
            break;
    }

    // Append new options to the select element
    options.forEach(function(option) {
        var opt = document.createElement('option');
        opt.value = option;
        opt.text = option;
        degreeSelect.add(opt);
    });
});