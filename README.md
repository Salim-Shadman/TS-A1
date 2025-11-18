**Blog Post Answers**

Q1 : What are some differences between interfaces and types in TypeScript?

=> Interface এবং Type দুটি দেখতে একই রকম মনে হলেও, এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে।


**1. Flexibility** =>

Type অনেক বেশি flexible। এটি দিয়ে Union, Primitive বা Tuple ডিফাইন করতে পারব, যা interface দিয়ে সম্ভব নয়।


* Type: type Status = "success" | "error"; (এটি সম্ভব)
* Interface: interface Status ... (এভাবে Union করা যায় না)




**2. Declaration Merging** =>


একই নামে দুইবার Interface লিখলে TypeScript সেগুলোকে অটোমেটিক মার্জ করে ফেলে।
কিন্তু Type এর ক্ষেত্রে একই নাম দুইবার ব্যবহার করলে এরর দিবে।



* Interface:

  interface User { name: string; }

  interface User { age: number; }


  // Result: User { name: string; age: number; }


* Type:

  type User = { ... }

  type User = { ... } // Error: Duplicate identifier



**3. Extensibility** =>

এক্সটেন্ড করার সিনট্যাক্স আলাদা। নিচে দেয়া হল ঃ 



* Interface: extends  কি-ওয়ার্ড ব্যবহার করে। ( অনেকটা Class এর মতো )
* Type:  & (intersection)  চিহ্ন ব্যবহার করে এক্সটেন্ড করা হয়।



-----------------------------------------------------

Q2 : Explain the difference between any, unknown, and never types in TypeScript.

=> এই তিনটি টাইপ দেখতে কাছাকাছি মনে হলেও কাজের দিক থেকে বিভিন্ন তফাৎ আছে।

**1.any** =>

এটি TypeScript এর চেকিং সিস্টেম অফ করে দেয়। ভেরিয়েবলে যা খুশি রাখা যায় এবং যা খুশি করা যায়।

* any ব্যবহার করা সহজ কিন্তু রিস্কি, কারণ এটি রানটাইমে অ্যাপ ক্র্যাশ করাতে পারে।

    let data: any = 'Hello';
    data.someMethod(); 
    
    এখানে কম্পাইল টাইমে কোনো এরর নেই, কিন্তু রানটাইমে ক্র্যাশ করবে!
 


**2.unknown** =>

এটি any এর মতো যেকোনো ভ্যালু নিতে পারে, কিন্তু ব্যবহারের আগে অবশ্যই চেক করে নিতে হয়।

* আগে typeof দিয়ে চেক করতে হয় এটি আসলে কী String না Number, unknown ভেরিয়েবলকে সরাসরি ব্যবহার করা যায় না ।
 তাই এটি any এর চেয়ে অনেক বেশি নিরাপদ।

    let val: unknown = 'Hello';
    val.toUpperCase(); 
    
    error আসবে কারন  TypeScript জানে না এটা কী।
    

    যদি আমরা চেক করে লিখতে চাই তাহলে এভাবে লিখতে হবে ঃ

    if (typeof val === 'string') {
      console.log(val.toUpperCase()); 
    }

     



**3.never** =>

এটি এমন কিছু নির্দেশ করে যা বাস্তবে কখনোই ঘটবে না।

* সাধারণত যেসব ফাংশন কখনোই শেষ হয় না , যেমন: Infinite Loop অথবা যেসব ফাংশন সবসময় Error throw করে, তাদের রিটার্ন টাইপ হয় never।

function throwError(message: string): never {
      throw new Error(message);
    }



১. ফাংশনটা সব সময় একটা এরর throw করে।
২. ফাংশনটা একটা infinite লুপে আটকে আছে।