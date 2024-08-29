function searchID() {
  const searchValue = document.getElementById('search_id').value.trim();

  if (!searchValue) {
    alert('দয়া করে একটি ID বা কন্টাক্ট নম্বর দিন');
    return;
  }

  const url = `https://script.google.com/macros/s/AKfycbzOrU-lC6D6NZ_ALzK82eD8g2zrtIlZajUv1ateZm6bBkAy9m0fQUBYSLRXEMOL3geb/exec?searchValue=${encodeURIComponent(searchValue)}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.result) {
        fillForm(data.result);
      } else {
        alert('কোনও ফলাফল পাওয়া যায়নি');
      }
    })
    .catch(error => {
      console.error('ত্রুটি:', error);
      alert('কোনও ফলাফল পাওয়া যায়নি');
    });
}

function formatDate(dateString) {
  const date = new Date(dateString);
  if (isNaN(date)) return ''; // Handle invalid dates
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function fillForm(data) {
  console.log('Filling form with data:', data);

  // List of all form field IDs and their corresponding data keys
  const fields = {
    'applicant_bangla': 'Name Bangla',
    'applicant_english': 'Name English',
    'father_name_bangla': 'Father Name Bangla',
    'father_name_english': 'Father Name English',
    'mother_name_bangla': 'Mother Name Bangla',
    'mother_name_english': 'Mother Name English',
    'birthdate': 'Birthdate',
    'nationality': 'Nationality',
    'religion': 'Religion',
    'gender': 'Gender',
    'nid_number': 'NID Number',
    'birth_registration_number': 'Birth Registration Number',
    'marital_status': 'Marital Status',
    'contact': 'Contact',
    'email': 'Email',
    'quota': 'Quota',
    'current_address': 'Current Address',
    'current_village': 'Current Village',
    'current_union': 'Current Union',
    'current_post_office': 'Current Post Office',
    'current_postcode': 'Current Postcode',
    'current_upazila': 'Current Upazila',
    'current_district': 'Current District',
    'current_division': 'Current Division',
    'permanent_address': 'Permanent Address',
    'permanent_village': 'Permanent Village',
    'permanent_union': 'Permanent Union',
    'permanent_post_office': 'Permanent Post Office',
    'permanent_postcode': 'Permanent Postcode',
    'permanent_upazila': 'Permanent Upazila',
    'permanent_district': 'Permanent District',
    'permanent_division': 'Permanent Division',
    'education_subject_ssc': 'Education Subject SSC',
    'education_group_ssc': 'Education Group SSC',
    'education_board_ssc': 'Education Board SSC',
    'education_roll_number_ssc': 'Education Roll Number SSC',
    'education_reg_number_ssc': 'Education Reg Number SSC',
    'education_year_ssc': 'Education Year SSC',
    'education_result_ssc': 'Education Result SSC',
    'education_subject_hsc': 'Education Subject HSC',
    'education_group_hsc': 'Education Group HSC',
    'education_board_hsc': 'Education Board HSC',
    'education_roll_number_hsc': 'Education Roll Number HSC',
    'education_reg_number_hsc': 'Education Reg Number HSC',
    'education_year_hsc': 'Education Year HSC',
    'education_result_hsc': 'Education Result HSC',
    'education_subject_graduation': 'Education Subject Graduation',
    'education_group_graduation': 'Education Group Graduation',
    'education_board_graduation': 'Education Board Graduation',
    'education_result_graduation_a': 'Education Result Graduation A',
    'education_result_graduation_b': 'Education Result Graduation B',
    'education_year_graduation': 'Education Year Graduation',
    'education_duration_graduation': 'Education Duration Graduation',
    'education_subject_masters': 'Education Subject Masters',
    'education_group_masters': 'Education Group Masters',
    'education_board_masters': 'Education Board Masters',
    'education_result_masters_a': 'Education Result Masters A',
    'education_result_masters_b': 'Education Result Masters B',
    'education_year_masters': 'Education Year Masters',
    'education_duration_masters': 'Education Duration Masters',
    'confirmation': 'Confirmation'
  };

  for (const [id, key] of Object.entries(fields)) {
    const element = document.getElementById(id);
    if (element) {
      if (key === 'Birthdate') {
        element.value = data[key] ? formatDate(data[key]) : '';
      } else {
        element.value = data[key] || '';
      }
    } else {
      console.error(`Element with ID ${id} not found.`);
    }
  }
}
