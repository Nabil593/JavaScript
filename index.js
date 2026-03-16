// ১. HTML এলিমেন্টগুলো সিলেক্ট করা (DOM Selection)
const totalCount = document.getElementById("total"); // মোট জবের সংখ্যা দেখানোর জন্য
const interviewCount = document.getElementById("interview"); // ইন্টারভিউ জবের সংখ্যা
const rejectedCount = document.getElementById("rejected"); // রিজেক্টেড জবের সংখ্যা

const allBtn = document.getElementById("all-btn"); // 'All' ফিল্টার বাটন
const interviewBtn = document.getElementById("interview-btn"); // 'Interview' ফিল্টার বাটন
const rejectedBtn = document.getElementById("rejected-btn"); // 'Rejected' ফিল্টার বাটন

const noJobsSection = document.getElementById("empty-section"); // জব না থাকলে যা দেখাবে
const counterText = document.getElementById("counter"); // উপরের ছোট কাউন্টার লেখাটি
const mainContainer = document.querySelector("main"); // পুরো অ্যাপের মেইন কন্টেইনার
const filterSection = document.getElementById("filtered-section"); // ফিল্টার করা জব দেখানোর জায়গা
const jobDetailsContainer = document.getElementById("job-details"); // সব জবের মেইন লিস্ট

// ২. ডাটা স্টোর করার জন্য খালি অ্যারে (List)
let interviewData = []; // ইন্টারভিউ হওয়া জবের ডাটা এখানে জমা থাকবে
let rejectedData = []; // রিজেক্ট হওয়া জবের ডাটা এখানে জমা থাকবে
let currentStatus = "all-btn"; // বর্তমানে কোন ফিল্টার সিলেক্ট করা আছে তা মনে রাখার জন্য

// ৩. ড্যাশবোর্ড আপডেট করার ফাংশন (সংখ্যা এবং মেসেজ আপডেট করে)
function updateDashboard() {
  const totalJobs = jobDetailsContainer.children.length; // মেইন লিস্টে কয়টি জব কার্ড আছে তা গোনা

  totalCount.innerText = totalJobs; // স্ক্রিনে মোট সংখ্যা বসানো
  interviewCount.innerText = interviewData.length; // ইন্টারভিউ সংখ্যা বসানো
  rejectedCount.innerText = rejectedData.length; // রিজেক্ট সংখ্যা বসানো

  // বর্তমানে কোন মোড (All/Interview/Rejected) চালু আছে সেই অনুযায়ী টেক্সট আপডেট করা
  if (currentStatus === "all-btn") {
    counterText.innerText = `${totalJobs} Jobs`;
    // যদি জব ০ হয় তবে 'No Jobs' সেকশন দেখাবে, নাহলে লুকাবে
    totalJobs > 0 ? noJobsSection.classList.add("hidden") : noJobsSection.classList.remove("hidden");
  } 
  else if (currentStatus === "interview-btn") {
    counterText.innerText = `${interviewData.length} of ${totalJobs} Jobs`;
    interviewData.length > 0 ? noJobsSection.classList.add("hidden") : noJobsSection.classList.remove("hidden");
  } 
  else if (currentStatus === "rejected-btn") {
    counterText.innerText = `${rejectedData.length} of ${totalJobs} Jobs`;
    rejectedData.length > 0 ? noJobsSection.classList.add("hidden") : noJobsSection.classList.remove("hidden");
  }
}
updateDashboard(); // পেজ লোড হওয়ার সাথে সাথে একবার কল করা

// ৪. ফিল্টার বাটনের স্টাইল এবং কন্টেন্ট পরিবর্তন করার ফাংশন
function toggleStyle(id) {
  currentStatus = id; // বর্তমান স্ট্যাটাস আপডেট করা

  const buttons = [allBtn, interviewBtn, rejectedBtn];
  
  // সব বাটনের নীল রঙ সরিয়ে সাদা করে দেওয়া (Reset)
  for (const btn of buttons) {
    btn.classList.replace("bg-[#3B82F6]", "bg-white");
    btn.classList.replace("text-white", "text-black");
  }

  // যে বাটনটি ক্লিক করা হয়েছে সেটিকে নীল রঙ করে দেওয়া
  const selected = document.getElementById(id);
  selected.classList.replace("bg-white", "bg-[#3B82F6]");
  selected.classList.replace("text-black", "text-white");

  // কোন বাটন ক্লিক হয়েছে তার ওপর ভিত্তি করে মেইন লিস্ট অথবা ফিল্টার সেকশন দেখানো
  if (id === "all-btn") {
    jobDetailsContainer.classList.remove("hidden");
    filterSection.classList.add("hidden");
  } else {
    jobDetailsContainer.classList.add("hidden");
    filterSection.classList.remove("hidden");

    // নির্দিষ্ট ডাটা নিয়ে রেন্ডার ফাংশন কল করা
    id === 'interview-btn' ? renderFilteredData(interviewData) : renderFilteredData(rejectedData);
  }
  updateDashboard();
}

// ৫. ইন্টারভিউ বা রিজেক্টেড জবের কার্ড তৈরি করার ফাংশন
function renderFilteredData(data) {
  filterSection.innerHTML = ""; // আগের সব কার্ড মুছে ফেলা (যাতে ডাবল না হয়)

  for (const item of data) {
    const isInterview = item.jobStatus === "INTERVIEW";
    let div = document.createElement("div");
    div.className = "bg-white p-6 rounded-lg flex justify-between my-14";

    // ডায়নামিকভাবে HTML কার্ড তৈরি করা
    div.innerHTML = `
        <div>
            <h3 class="job-name text-[#002C5C] text-[20px] font-semibold">${item.jobName}</h3>
            <p class="job-title text-[#64748B] text-[16px]">${item.jobTitle}</p>
            <p class="salary text-[#64748B] text-[14px] my-[20px]">${item.salary}</p>
            <p class="status w-30 text-center py-1.5 px-3 rounded-md text-[14px] font-medium border ${isInterview ? "bg-green-100 border-green-500 text-green-700" : "bg-red-100 border-red-500 text-red-700"}">${item.jobStatus}</p>
            <p class="discription text-[#323B49] text-[14px] mt-2 mb-5">${item.jobDiscription}</p>
            <button class="interv-btn py-1.5 px-3 border rounded-md border-[#10B981] text-[#10B981] text-[14px] font-semibold cursor-pointer">INTERVIEW</button>
            <button class="reject-btn py-1.5 px-3 border rounded-md border-[#EF4444] text-[#EF4444] text-[14px] font-semibold cursor-pointer">REJECTED</button>
        </div>
        <div class="delete-btn w-8 h-8 p-2 text-[20px] flex items-center justify-center rounded-full text-gray-500 cursor-pointer">
            <i class="fa-regular fa-trash-can"></i>
        </div>`;
    filterSection.appendChild(div);
  }
}

// ৬. মেইন কন্টেইনারে ক্লিক হ্যান্ডলার (Event Delegation)
mainContainer.addEventListener("click", function (e) {
  const target = e.target;
  let card = target;

  // ক্লিক করা এলিমেন্ট থেকে মেইন কার্ড (div) খুঁজে বের করা
  while (card && card !== mainContainer && !card.classList.contains("bg-white")) {
    card = card.parentElement;
  }

  if (!card || card === mainContainer) return;

  const jobName = card.querySelector(".job-name").innerText;

  // ইন্টারভিউ বাটন ক্লিক করলে
  if (target.classList.contains("interv-btn")) {
    updateJobStatus(card, jobName, "INTERVIEW");
  }
  // রিজেক্ট বাটন ক্লিক করলে
  else if (target.classList.contains("reject-btn")) {
    updateJobStatus(card, jobName, "REJECTED");
  }
  // ডিলিট বাটন ক্লিক করলে
  else if (target.classList.contains("fa-trash-can") || target.parentElement.classList.contains("delete-btn")) {
    const allJobCards = jobDetailsContainer.children;
    for (const child of allJobCards) {
      if (child.querySelector(".job-name").innerText === jobName) {
        child.remove(); // মেইন লিস্ট থেকে ডিলিট
        break; 
      }
    }
    // অ্যারে থেকেও ডিলিট
    interviewData = interviewData.filter((i) => i.jobName !== jobName);
    rejectedData = rejectedData.filter((i) => i.jobName !== jobName);

    if (currentStatus !== "all-btn") card.remove(); // ফিল্টার ভিউতে থাকলে সেখান থেকেও ডিলিট
    updateDashboard();
  }
});

// ৭. জবের স্ট্যাটাস পরিবর্তন করার মেইন ফাংশন
function updateJobStatus(card, jobName, status) {
  const allJobCards = jobDetailsContainer.children;

  // মেইন লিস্টের কার্ড আপডেট করা
  for (const child of allJobCards) {
    if (child.querySelector(".job-name").innerText === jobName) {
      const statusEl = child.querySelector(".status");
      statusEl.innerText = status;
      // স্ট্যাটাস অনুযায়ী রঙ বদলানো
      statusEl.className = status === "INTERVIEW" 
        ? "status w-30 text-center py-1.5 px-3 rounded-md text-[14px] font-medium border bg-green-100 border-green-500 text-green-700"
        : "status w-30 text-center py-1.5 px-3 rounded-md text-[14px] font-medium border bg-red-100 border-red-500 text-red-700";
      break;
    }
  }

  // নতুন ডাটা অবজেক্ট তৈরি
  const jobInfo = {
    jobName,
    jobTitle: card.querySelector(".job-title").innerText,
    salary: card.querySelector(".salary").innerText,
    jobStatus: status,
    jobDiscription: card.querySelector(".discription").innerText,
  };

  // ইন্টারভিউ হলে ইন্টারভিউ লিস্টে ঢোকানো এবং রিজেক্ট লিস্ট থেকে বের করে দেওয়া
  if (status === "INTERVIEW") {
    if (!interviewData.find((i) => i.jobName === jobName)) interviewData.push(jobInfo);
    rejectedData = rejectedData.filter((i) => i.jobName !== jobName);
  } else {
    if (!rejectedData.find((i) => i.jobName === jobName)) rejectedData.push(jobInfo);
    interviewData = interviewData.filter((i) => i.jobName !== jobName);
  }

  // ফিল্টার মোডে থাকলে সাথে সাথে লিস্ট রি-রেন্ডার করা
  if (currentStatus === "interview-btn") renderFilteredData(interviewData);
  if (currentStatus === "rejected-btn") renderFilteredData(rejectedData);

  updateDashboard();
}