# SAFER: Facilitation prompts

<details>
  
  <summary>🎯 Set Purpose</summary>


*   **Purpose Statement**: Prepare a clearly written purpose statement on the use of language models.
    
*   **Role Definition**: Is the role of the language model explicitly defined? _(e.g., summarize content, help with ideation only, generate graphics)_
    
*   **Boundaries**: Are boundaries and non-use conditions specified?
    
*   **Risk Mitigation**: Are high-risk or sensitive uses ruled out?
    
*   **Collaboration**: Can the purpose statement be developed collaboratively with at least one other volunteer?
    
*   **Context**: Are the intended audience and publication platform explicitly stated? _(e.g., Instagram, print, internal notice)_
    

</details>

<details>
  
  <summary>⚠️ Assess Harms</summary> 
  
_📌 Highlight these routine checks during the first orientation._

*   **Stakeholder Impact**: What kind of harms can this output bring to each group of stakeholders?
    
*   **Data Privacy**: Is there a concrete "Do not copy into the prompt" list that includes:
    
    *   Real names
        
    *   Photos of people
        
    *   Time zones
        
    *   Learner numbers
        
    *   Politically sensitive terms
        
*   **Accuracy Verification**: Could a domain-knowledgeable person _(e.g., a cultural insider)_ verify cultural or regional accuracy where needed?
    
*   **Security Risk**: Could any language, symbol, or metadata put learners, volunteers, or the organization at political or surveillance risk?


## Base prompt

```
I am a volunteer working on a humanitarian project. Help me think through the risks of a given task in plain, simple language.

Here is the task: [DESCRIBE THE TASK IN ONE OR TWO SENTENCES]
Here is who will see or use the result: [DESCRIBE THE AUDIENCE]

Before answering, think through the risks privately first, the way a careful colleague would in a normal workplace - not like a
legal disclaimer generator. Silently brainstorm a broad list of possible risks across the four categories below, then filter that
list down: drop anything that is purely theoretical, extremely unlikely, or would only matter in an unusual edge case. Keep only
risks that a reasonable, experienced person would actually flag as worth a moment's thought before proceeding.

Do not show me your full brainstormed list or your filtering process - only show me the result.

For EACH of the four categories below, give me your single TOP concern only - the one most likely and most consequential for
THIS specific task and audience. If you genuinely cannot find a reasonable, non-trivial concern in a category,
say "No significant concern identified" rather than inventing one. Keep each answer to 1-2 plain English sentences, no jargon.

1. MISINFORMATION: What is the single fact, detail, or type of error I'm most likely to get wrong if I rely on you for this task?
2. PRIVACY: What is the single most important thing I should avoid typing into this conversation, given who this task is for?
3. WHO COULD BE HARMED: If this task goes wrong, who is the person or group most likely to be affected, and how?
4. CULTURAL FIT: What is the single assumption you are most likely to be making that may not hold true for the audience described above?

Then, across all four categories, name your TOP 3 CRITICAL RISKS overall - the ones that actually matter enough to act on, ranked
by how serious they are. This list should be short by design; if you list more than 3, you have not filtered enough.

5. RED FLAG CHECK: Based only on those top 3 risks, is there anything serious enough that I should NOT use an AI tool for this
task at all, or should only use it for part of the task? Be honest, even if that means saying yes. If the top 3 risks are all
manageable, say so plainly instead of hedging.
```

```[DESCRIBE THE TASK IN ONE OR TWO SENTENCES]``` replace with:
- "creating a one-page lesson plan about world cultures for non-English speaking learners"
- "designing a recruitment poster for volunteers"
- "translating a community notice from English to Arabic"

```[DESCRIBE THE AUDIENCE]``` replace with:
- "students aged 5-9 in a refugee camp"
- "the general public on social media"
- "community members who speak Arabic as a first language"


</details>
<details>
  
  <summary>🛡️ Fortify</summary>

*   **Prompt Engineering**: Are reusable fortification prompt templates being applied to language model outputs?
    
*   **Contextual Bias**: Were assumptions made about normal life that may not apply in the specific context?
    
*   **Feasibility**: Were the listed resource requirements unrealistic for the local context or volunteer capabilities?
    
*   **Stereotypes**: Was there any information that appears outdated or stereotypical?
    
*   **Human Touch**: Is there any element that demonstrates real human involvement, or does it look entirely synthetic?
    
*   **Peer Review**: Before finalizing, could at least one other volunteer have reviewed the output?
    
*   **Criticism Simulation**: Imagine a public criticism: what would a stranger attack in this output? Can that be fixed now?


## Base prompt

```
Review this output for use in our context. Identify:

1. Any assumptions about normal life that don't apply
2. Resource requirements that may be unrealistic
3. Cultural sensitivities or potential misalignments
4. Suggestions that could be harmful or burdensome
5. Any information that appears outdated or stereotypical

Be specific and practical in your critique.
```    
</details>

<details>
  
  <summary>📢 Explain for Transparency</summary>

*   **Disclosure Impact**: Have we considered how the form of AI disclosure _(label, wording, placement, detail level)_ may affect trust or interpretation of the output?
    
*   **Perception**: Could the disclosure unintentionally reduce perceived legitimacy, clarity, or willingness to engage?
    
*   **Limitations**: Are limitations and uncertainties clearly communicated?
    
*   **Feedback Loops**: Is there a visible channel for user feedback if concerns arise?
    
*   **Traceability**: Are feedback and resulting changes documented in a lightweight changelog _(e.g., version, reviewer, date)_ to support accountability?

</details>

<details>
  
  <summary>🛑 Reject</summary>
  
  _📌 Highlight these routine checks during the first orientation._

*   **Critical Surveillance**: Could any language, symbol, or metadata put learners, volunteers, or the organization at political or surveillance risk?
    
*   **Consultation Pause**: If uncertain about any risk, has the volunteer paused to consult a peer before proceeding?
    
*   **Irreparable Output**: Can no adequate fortification level be reached for the given task?

</details>
