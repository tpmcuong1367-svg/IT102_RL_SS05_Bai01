// Du lieu tho tu may quet Kiosk
const rawAppointmentCode = "  med-nhi-1024  ";
const cleanPatientName = "  nguyễn văn an  ";

// Chuan hoa chuoi: cat khoang trang va chuyen in hoa
const normalizedCode = rawAppointmentCode.trim().toUpperCase();
const formattedPatientName = cleanPatientName.trim().toUpperCase();

// Kiem tra tien to MED-
const isCodeValid = normalizedCode.startsWith("MED-");

// Trich xuat chuyen khoa va so thu tu tiep don bang slice
// normalizedCode: "MED-NHI-1024"
const departmentCode = normalizedCode.slice(4, 7);
const appointmentNumber = normalizedCode.slice(-4);

console.log("Bệnh nhân:", formattedPatientName);
console.log("Chuyên khoa:", departmentCode);
console.log("Số thứ tự tiếp đón:", appointmentNumber);
console.log("Trạng thái hợp lệ:", isCodeValid);