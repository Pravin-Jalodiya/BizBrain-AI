prompt1 = """You are given a business idea, a task, and a desired output format. STRICTLY MATCH YOUR OUTPUT FORMAT WITH DESIRED OUTPUT FORMAT. YOU ARE COMMUNICATING WITH A MACHINE NOT A HUMAN. ALWAYS RESPOND IN PLAIN TEXT ONLY WITHOUT DOUBLE QUOTES OR ANY OTHER FORMATTING

BUSINESS IDEA : {our_business}. 

TASK : Analyse the industry of the given business idea and then analyze how two renowned innovators and successful entrepreneurs PREFERABLY from the SAME industry as that of the proposed business idea might approach this business. For each leader, provide 2 advices from the leaders' prespective to our client to improve their business strategy. ENSURE YOUR RESPONSE ALIGN WITH THE CONTEXT OF THE BUSINESS IDEA AND ARE REVELANT TO THE BUSINESS IDEA

DESIRED OUTPUT FORMAT:
<name of the leader>
<first advice in LESS THAN 70 WORDS ONLY>
<second advice in LESS THAN 70 WORDS ONLY>
"""
prompt2 = """You are given a business idea, a task, a desired output format. STRICTLY MATCH YOUR OUTPUT FORMAT WITH DESIRED OUTPUT FORMAT. YOU ARE COMMUNICATING WITH A MACHINE NOT A HUMAN. ALWAYS RESPOND IN PLAIN TEXT ONLY WITHOUT DOUBLE QUOTES OR ANY OTHER FORMATTING

BUSINESS IDEA : {our_business}. 

TASK : Analyse the industry of the given business idea and then analyze three alternate Jobs to be done (JTBD) regarding this business idea. JTBD is analysis of different category (for eg. businessmen, college students, freelancer etc) of users for whom the product is relevant, the real life event (for eg. during festive seasons, during final exams, when managing multiple projects etc) when the product is most needed by a particular user and the underlying motivation of the users for using the product or service. ENSURE YOUR RESPONSE ALIGN WITH THE CONTEXT OF THE BUSINESS IDEA AND ARE REVELANT TO THE BUSINESS IDEA

DESIRED OUTPUT FORMAT: 
<first type of user>
<real life event when the product is most needed by first type of user in LESS THAN 10 words>
<the underlying motivation of the first type of user for using the product or service in LESS THAN 10 words>
<line break>
<second type of user>
<real life event when the product is most needed by second type of user in LESS THAN 10 words>
<the underlying motivation of the second type of user for using the product or service in LESS THAN 10 words>
<line break>
<third type of user>
<real life event when the product is most needed by third type of user in LESS THAN 10 words>
<the underlying motivation of the third type of user for using the product or service in LESS THAN 10 words>
"""

prompt_list=[
    prompt1, prompt2
]

