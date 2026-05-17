export const TEACHER_PASSWORD = "teacher";
export const TEACHER_MODE_KEY = "kp_teacher_mode";
export const isTeacherMode = () => !!sessionStorage.getItem(TEACHER_MODE_KEY);
