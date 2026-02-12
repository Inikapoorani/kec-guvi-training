import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function FAQ() {
  const faqs = [
    {
      question: "What is the KEC-GUVI Industrial Training Program?",
      answer: "The KEC-GUVI Industrial Training Program is a collaborative initiative between Kongu Engineering College (KEC) and GUVI, designed to provide students with practical, industry-relevant training in various technologies and skills."
    },
    {
      question: "Who is eligible to participate in this program?",
      answer: "The program is open to students from Kongu Engineering College and other interested learners. Specific eligibility criteria may vary by course, but generally, students pursuing engineering or related fields are encouraged to apply."
    },
    {
      question: "What courses are offered in the program?",
      answer: "We offer a range of courses including web development, data science, cybersecurity, cloud computing, and more. The curriculum is regularly updated to align with industry trends and demands."
    },
    {
      question: "How long does each course last?",
      answer: "Course durations vary depending on the specific program. Most courses range from 4 to 12 weeks, with flexible scheduling options including part-time and full-time formats to accommodate different learning needs."
    },
    {
      question: "Is the training online or offline?",
      answer: "We offer both online and offline training options. Online courses provide flexibility for remote learning, while offline sessions offer hands-on experience in our state-of-the-art facilities."
    },
    {
      question: "Do I receive a certificate upon completion?",
      answer: "Yes, upon successful completion of the course, participants receive an industry-recognized certificate from KEC-GUVI, which can enhance your resume and job prospects."
    },
    {
      question: "Are there any placement opportunities after the training?",
      answer: "While we don't guarantee placements, our program includes career guidance, resume building, and interview preparation. Many graduates have secured positions in top companies through our industry connections."
    },
    {
      question: "What is the cost of the program?",
      answer: "Program fees vary by course and duration. We offer competitive pricing with scholarships and payment plans available for eligible students. Contact our admissions team for detailed fee information."
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
