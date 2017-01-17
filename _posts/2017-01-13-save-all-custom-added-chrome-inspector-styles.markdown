---
layout: post
title: 'Save All Custom Added Chrome Inspector Styles'
date: 2017-01-12 09:25:00
categories:
  - web development
  - tools
---

Have you ever spent 20 minutes making edits in the chrome inspector and after marvelling at your maginificent work realise that you can't remember which elements you edited and there were so many that it's gonna take another 20 minutes to find them and copy them over to the actual file. If you're anything like me, you'll say 'yes, yes I have'. It's frustrating, eh! Well not any more:

![alt text](../uploads/inspector-screenshot.png "Chrome Inspector showing some newly selected elements with their styles in CSS")

Low and behold, hidden away under the 'Sources' tab, scroll down to localhost and you'll see the inspector stylesheet! This will include any newly selected elements you've added and their corresponding styles. 'But what if I just edited a few elements that were already defined in my css', I hear you cry. Well fear not:

![alt text](../uploads/chrome-inspector2.png "Chrome Inspector showing some elements' styles that already had some styles in the current CSS file")

Here you have it, maybe you just unticked a font size, dropped a few pixels from a margin, or if you're feeling very 2016 maybe you changed a flex-direction. Either way, you can see everything. No more 'I think I floated this and added a fish to that'. See exactly what you've done and copy it over.

Of course if you're more organized than me you can link up your file workspace with the chrome inspector and just save the edits as you make them. But truth is, we're not all perfect. Someone once said I was perfect and they thought I misheard but I guess we just mishear what we want to hear, right.
