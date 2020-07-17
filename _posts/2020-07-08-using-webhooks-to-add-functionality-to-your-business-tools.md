---
layout: post
title:  "Using Webhooks to Extend The Applications You Use"
author: ben
categories: [ Web ]
tags: [ Webhooks, API, Business ]
image: assets/images/webhook-poster-blue.jpg
---

So firstly, what on earth is a webhook?

Quick definition: A webhook is a way for an app to provide other applications with real-time information. **A webhook delivers data** to other applications as it happens, meaning you can get live updates with real data.

Quick example: A user makes a change in one of your mailchimp audiences. Because mailchimp offers webhooks (and we've hypothetically set this up), the audience data is sent across the web to another application. This application could be pre-built e.g. a Zapier task that catches the data, or maybe it's a bit of code that does something bespoke with the data.

![alt text](/assets/images/webhook-example.jpg "Mailchimp webhook example process")

So if an application offers webhooks, it's likely you can create all kinds of wonderful add-ons which happen on the fly as your team use the app. In the mailchimp example, maybe you want to have custom tracking of unsubscribes. In this case, it wouldn't be a user changing the data, but a customer when they click "Unsubscribe" at the bottom of an email you sent them. Still, the application data will have been updated, the webhook will be triggered, and you can collect that data for, say, an analysis on the audiences you're failing to retain through email-marketing!

It helps to have a developer on-board for more custom ideas you have, but [Zapier](https://zapier.com/) also does a good job as it offers an app that can "catch" webhooks and a wide range of apps to do something with the data.
