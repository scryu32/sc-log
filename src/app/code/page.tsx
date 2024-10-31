import "./code.css"


export default function CodePage(){
    const codeCards = {
        "codeCards" : [
            {
                "id" : 1,
                "title" : "Fine-Tuning",
                "content" : "**Fine-Tuning**은 이미 학습된 인공지능을 조절함으로써 기능을 향상시키는 기술로, 인공지능과 관련된 다양한 프로젝트에 사용될 수 있다.",
                "link": [
                    {
                        "url": "https://platform.openai.com/docs/guides/fine-tuning",
                        "description": "OpenAI Fine-Tuning Guide"
                    },
                    {
                        "url": "https://kr.appen.com/blog/fine-tuning/",
                        "description": "How to make own LLM?"
                    }
                ],
                "category" : [ 'AI', 'Chat-GPT']
            },
            {
                "id" : 2,
                "title" : "Python",
                "content" : "**Python**은 프로그래밍 언어로, 인터프리터 언어이다. 파이썬은 코드가 간결하고 인공지능과 빅데이터 분석에 유리하다는 장점이 있다.",
                "link": [
                    {
                        "url": "https://codingapple.com/course/python-basic/",
                        "description": "Coding Apple Python Guide"
                    },
                    {
                        "url": "https://www.python.org/",
                        "description": "Official Python Website"
                    }
                ],
                "category" : [ 'Programming Language', 'AI', 'Interpreter']
            }
        ] 
    }

    return (
        <div className="code-main-box">
            
        </div>
    )
}