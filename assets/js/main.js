document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("auditForm");
    const modalElement = document.getElementById("formsubmitModal");
    const modal = new bootstrap.Modal(modalElement);
    const submitButton = document.querySelector('button[type="submit"]');

    // Function to toggle remarks div visibility and clear errors (existing function remains unchanged)
    function toggleRemarks(radioGroupName, remarksDivId, errorId, remarksErrorId) {
        const radios = document.getElementsByName(radioGroupName);
        const remarksDiv = document.getElementById(remarksDivId);
        const textarea = remarksDiv.querySelector("textarea");
        const errorSpan = document.getElementById(errorId);
        const remarkserror = document.getElementById(remarksErrorId);

        remarksDiv.classList.add("d-none");

        radios.forEach(radio => {
            radio.addEventListener("change", function () {
                errorSpan.textContent = "";

                if (radio.value === "Not OK") {
                    remarksDiv.classList.remove("d-none");
                } else {
                    remarksDiv.classList.add("d-none");
                    textarea.value = "";
                    textarea.style.border = "";
                    remarkserror.textContent = "";
                }
            });
        });

        // Hide remarks error when user starts typing
        textarea.addEventListener("input", function () {
            textarea.style.border = "";
            remarkserror.textContent = "";
        });
    }

    // Apply function to each question (existing)
    toggleRemarks("question", "question_remarks", "question_error", "question_remarkserror");
    toggleRemarks("question_1", "question_1_remarks", "question_1_error", "question_1_remarkserror");
    toggleRemarks("question_2", "question_2_remarks", "question_2_error", "question_2_remarkserror");
    toggleRemarks("question_3", "question_3_remarks", "question_3_error", "question_3_remarkserror");
    toggleRemarks("question_4", "question_4_remarks", "question_4_error", "question_4_remarkserror");
    toggleRemarks("question_5", "question_5_remarks", "question_5_error", "question_5_remarkserror");
    toggleRemarks("question_6", "question_6_remarks", "question_6_error", "question_6_remarkserror");
    toggleRemarks("question_7", "question_7_remarks", "question_7_error", "question_7_remarkserror");
    toggleRemarks("question_8", "question_8_remarks", "question_8_error", "question_8_remarkserror");
    toggleRemarks("question_9", "question_9_remarks", "question_9_error", "question_9_remarkserror");
    toggleRemarks("question_10", "question_10_remarks", "question_10_error", "question_10_remarkserror");
    toggleRemarks("question_11", "question_11_remarks", "question_11_error", "question_11_remarkserror");
    toggleRemarks("question_12", "question_12_remarks", "question_12_error", "question_12_remarkserror");
    toggleRemarks("question_13", "question_13_remarks", "question_13_error", "question_13_remarkserror");
    toggleRemarks("question_14", "question_14_remarks", "question_14_error", "question_14_remarkserror");
    toggleRemarks("question_15", "question_15_remarks", "question_15_error", "question_15_remarkserror");
    toggleRemarks("question_16", "question_16_remarks", "question_16_error", "question_16_remarkserror");
    toggleRemarks("question_17", "question_17_remarks", "question_17_error", "question_17_remarkserror");
    toggleRemarks("question_18", "question_18_remarks", "question_18_error", "question_18_remarkserror");
    toggleRemarks("question_19", "question_19_remarks", "question_19_error", "question_19_remarkserror");
    toggleRemarks("question_20", "question_20_remarks", "question_20_error", "question_20_remarkserror");
    toggleRemarks("question_21", "question_21_remarks", "question_21_error", "question_21_remarkserror");
    toggleRemarks("question_22", "question_22_remarks", "question_22_error", "question_22_remarkserror");
    toggleRemarks("question_23", "question_23_remarks", "question_23_error", "question_23_remarkserror");
    toggleRemarks("question_24", "question_24_remarks", "question_24_error", "question_24_remarkserror");
    toggleRemarks("question_25", "question_25_remarks", "question_25_error", "question_25_remarkserror");
    toggleRemarks("question_26", "question_26_remarks", "question_26_error", "question_26_remarkserror");
    toggleRemarks("question_27", "question_27_remarks", "question_27_error", "question_27_remarkserror");

    // New validation for Date, Department, and Job Title
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = true;

        // Validate Date
        const dateInput = document.getElementById("date");
        const dateError = document.getElementById("date_error");
        if (!dateInput.value.trim()) {
            isValid = false;
            dateError.textContent = "Date is required.";
        } else {
            dateError.textContent = "";
        }

        // Validate Department
        const department1Input = document.getElementById("department1");
        const departmentError = document.getElementById("department_error");
        if (!department1Input.value.trim()) {
            isValid = false;
            departmentError.textContent = "Department is required.";
        } else {
            departmentError.textContent = "";
        }

        // Validate Job Title
        const department2Input = document.getElementById("department2");
        const jobTitleError = document.getElementById("jobtile_error");
        if (!department2Input.value.trim()) {
            isValid = false;
            jobTitleError.textContent = "Job Title is required.";
        } else {
            jobTitleError.textContent = "";
        }

        // Validate the existing fields (questions and remarks)
        const fields = [
            { name: "question", errorId: "question_error", remarksId: "question_remarks", remarksErrorId: "question_remarkserror" },
            { name: "question_1", errorId: "question_1_error", remarksId: "question_1_remarks", remarksErrorId: "question_1_remarkserror" },
            { name: "question_2", errorId: "question_2_error", remarksId: "question_2_remarks", remarksErrorId: "question_2_remarkserror" },
            { name: "question_3", errorId: "question_3_error", remarksId: "question_3_remarks", remarksErrorId: "question_3_remarkserror" },
            { name: "question_4", errorId: "question_4_error", remarksId: "question_4_remarks", remarksErrorId: "question_4_remarkserror" },
            { name: "question_5", errorId: "question_5_error", remarksId: "question_5_remarks", remarksErrorId: "question_5_remarkserror" },
            { name: "question_6", errorId: "question_6_error", remarksId: "question_6_remarks", remarksErrorId: "question_6_remarkserror" },
            { name: "question_7", errorId: "question_7_error", remarksId: "question_7_remarks", remarksErrorId: "question_7_remarkserror" },
            { name: "question_8", errorId: "question_8_error", remarksId: "question_8_remarks", remarksErrorId: "question_8_remarkserror" },
            { name: "question_9", errorId: "question_9_error", remarksId: "question_9_remarks", remarksErrorId: "question_9_remarkserror" },
            { name: "question_10", errorId: "question_10_error", remarksId: "question_10_remarks", remarksErrorId: "question_10_remarkserror" },
            { name: "question_11", errorId: "question_11_error", remarksId: "question_11_remarks", remarksErrorId: "question_11_remarkserror" },
            { name: "question_12", errorId: "question_12_error", remarksId: "question_12_remarks", remarksErrorId: "question_12_remarkserror" },
            { name: "question_13", errorId: "question_13_error", remarksId: "question_13_remarks", remarksErrorId: "question_13_remarkserror" },
            { name: "question_14", errorId: "question_14_error", remarksId: "question_14_remarks", remarksErrorId: "question_14_remarkserror" },
            { name: "question_15", errorId: "question_15_error", remarksId: "question_15_remarks", remarksErrorId: "question_15_remarkserror" },
            { name: "question_16", errorId: "question_16_error", remarksId: "question_16_remarks", remarksErrorId: "question_16_remarkserror" },
            { name: "question_17", errorId: "question_17_error", remarksId: "question_17_remarks", remarksErrorId: "question_17_remarkserror" },
            { name: "question_18", errorId: "question_18_error", remarksId: "question_18_remarks", remarksErrorId: "question_18_remarkserror" },
            { name: "question_19", errorId: "question_19_error", remarksId: "question_19_remarks", remarksErrorId: "question_19_remarkserror" },
            { name: "question_20", errorId: "question_20_error", remarksId: "question_20_remarks", remarksErrorId: "question_20_remarkserror" },
            { name: "question_21", errorId: "question_21_error", remarksId: "question_21_remarks", remarksErrorId: "question_21_remarkserror" },
            { name: "question_22", errorId: "question_22_error", remarksId: "question_22_remarks", remarksErrorId: "question_22_remarkserror" },
            { name: "question_23", errorId: "question_23_error", remarksId: "question_23_remarks", remarksErrorId: "question_23_remarkserror" },
            { name: "question_24", errorId: "question_24_error", remarksId: "question_24_remarks", remarksErrorId: "question_24_remarkserror" },
            { name: "question_25", errorId: "question_25_error", remarksId: "question_25_remarks", remarksErrorId: "question_25_remarkserror" },
            { name: "question_26", errorId: "question_26_error", remarksId: "question_26_remarks", remarksErrorId: "question_26_remarkserror" },
            { name: "question_27", errorId: "question_27_error", remarksId: "question_27_remarks", remarksErrorId: "question_27_remarkserror" },
        ];

        fields.forEach(field => {
            const radios = document.getElementsByName(field.name);
            const errorSpan = document.getElementById(field.errorId);
            const remarksDiv = document.getElementById(field.remarksId);
            const textarea = remarksDiv.querySelector("textarea");
            const remarkserror = document.getElementById(field.remarksErrorId);
            const checkedRadio = Array.from(radios).find(radio => radio.checked);

            if (!checkedRadio) {
                isValid = false;
                errorSpan.textContent = "Please select an option.";
            } else {
                errorSpan.textContent = "";
                if (checkedRadio.value === "Not OK" && textarea.value.trim() === "") {
                    isValid = false;
                    textarea.style.border = "1px solid red";
                    remarkserror.textContent = "Remarks are required. Please fill them in.";
                } else {
                    textarea.style.border = "";
                    remarkserror.textContent = "";
                }
            }
        });
        if (!isValid) {
            // Expand all accordion sections if validation fails
            document.querySelectorAll("#question_accordion .accordion-collapse").forEach(item => {
                item.classList.add("show");
            });
            return;
        } else {
            // Collapse all accordion sections if validation passes
            document.querySelectorAll("#question_accordion .accordion-collapse").forEach(item => {
                item.classList.remove("show");
            });
        }


        // If valid, show modal
        if (isValid) {
            submitButton.disabled = true;
            submitButton.innerHTML = 'Loading...';
            setTimeout(() => {
                modal.show();
                submitButton.disabled = false;
                submitButton.innerHTML = "Final Submit";
                form.reset();
                // Reset remarks fields
                fields.forEach(field => {
                    document.getElementById(field.remarksId).classList.add("d-none");
                });
                // Reset Date, Department, and Job Title fields
                dateInput.value = "";
                department1Input.value = "";
                department2Input.value = "";
            }, 2000);
        }
    });
});
