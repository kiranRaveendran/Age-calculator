function calculateAge() {
    const birthdate = document.getElementById("birthdate").value;
    let message=document.getElementById("message")
    let message2=document.querySelector('.child')
    if (!birthdate) {
        message.style.backgroundColor='#ffa382'
        message.textContent='You have to choose a date below'
        return;
    }
    message.textContent='Enter your birth date:'
    const birthDate = new Date(birthdate);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust months and years if needed
    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // Days in the previous month
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    // Display the results in the respective elements
    document.getElementById("year").textContent = `${years}`;
    document.getElementById("month").textContent = `${months}`;
    document.getElementById("day").textContent = `${days}`;
}