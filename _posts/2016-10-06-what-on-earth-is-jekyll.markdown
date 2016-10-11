---
layout: post
title: 'What on earth is Jekyll?'
date: 2016-10-06 09:25:00
categories:
  - web development
  - tools
---

It's a kind of tool to create static websites.

## What's a static website?
Well if you've ever built a website, you probably started by simply creating one file, an HTML document.
Then maybe you added a CSS file and eventually some JS.
Then Wordpress and Joomla etc came along and they were so powerful they were the natural progression but things just seem to have got a bit bogged down.
And so now we seem to have done a complete loop and we're creating the simple sites again. No need for the pain that is databases, no need for any PHP or server side scripting. Good old fashioned web dev!

## More about Jekyll
OK, so you still gotta do a bit of command line business. This always puts me off as I like to see exactly what I'm downloading but fear not, once you've installed it you won't need it again. Follow the instructions on the [Jekyll docs](http://jekyllrb.com) to install.

What you should eventually have is a few folders that should look fairly familiar. Styles in Sass, pages, posts, layouts.

To add new posts, simply add a file in the `_posts`{: .highlighter-rouge} directory that follows the convention `YYYY-MM-DD-name-of-post.ext`{: .highlighter-rouge} and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

<figure class="highlight"><pre><code class="language-ruby" data-lang="ruby"><span class="k">def</span> <span class="nf">print_hi</span><span class="p">(</span><span class="nb">name</span><span class="p">)</span>
  <span class="nb">puts</span> <span class="s2">"Hi, </span><span class="si">#{</span><span class="nb">name</span><span class="si">}</span><span class="s2">"</span>
<span class="k">end</span>
<span class="n">print_hi</span><span class="p">(</span><span class="s1">'Tom'</span><span class="p">)</span>
<span class="c1">#=&gt; prints 'Hi, Tom' to STDOUT.</span></code></pre></figure>

Check out the [Jekyll docs](http://jekyllrb.com) for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo](https://github.com/jekyll/jekyll). If you have questions, you can ask them on [Jekyll’s dedicated Help repository](https://github.com/jekyll/jekyll-help).