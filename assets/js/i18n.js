const translations = {
  de: {
    // Nav
    'nav.about':    'Über uns',
    'nav.services': 'Leistungen',
    'nav.team':     'Team',
    'nav.faq':      'FAQ',
    'nav.contact':  'Kontakt',

    // Hero
    'hero.heading': 'Ihr Anliegen ist der <em>Ausgangspunkt.</em>',

    // About
    'about.heading': 'Der richtige Anwalt<br />hört zuerst zu.',
    'about.p1': 'Mandanten kommen selten mit einem klar strukturierten Auftrag. Sie kommen mit einem Problem — eines, das oft dringend, selten einfach und immer persönlich ist.',
    'about.p2': 'Grösse und Bekanntheit allein machen noch keine gute Anwaltskanzlei aus. Es ist der Anwalt, der zuerst zuhört, das gesamte Bild versteht und dann mit Präzision handelt.',
    'about.p3': 'Diese Präzision entsteht durch Arbeit, die selten sichtbar ist. Von den Tatsachen über die Gegenposition bis hin zu den gesetzlichen Grundlagen — Stück für Stück wird das Bild aufgebaut, bis das richtige Argument klar wird.',
    'about.p4': 'Bei Mairhofer Advokatur beginnen wir genau dort. Jedes Mandat startet mit dem Verständnis dessen, was wirklich auf dem Spiel steht — für Sie, nicht nur auf dem Papier.',

    // Practice areas
    'practice.heading': 'Rechtsgebiete',
    'practice.card1': 'Private Clients & Non-Profits',
    'practice.card2': 'Digital Business',
    'practice.card3': 'Bank-, Versicherungs- und Finanzmarktrecht',
    'practice.card4': 'Gesellschafts- und Handelsrecht',
    'practice.card5': 'Immobilien- und Baurecht',
    'practice.card6': 'Streitbeilegung und Prozessführung',

    // Partners
    'partners.heading':       'Ihr Ansprechpartner',
    'partners.remo.title':    'Rechtsanwalt | Treuhänder | <span class="accent">Gründer & CEO</span>',
    'partners.tomasz.title':  'Rechtsanwalt (FL, A & PL) | Öffentlicher Notar | <span class="accent">Partner</span>',
    'partners.viewprofile':   'Profil ansehen →',

    // FAQ
    'faq.heading': 'Häufige Fragen',
    'faq.q1': 'Ab wann lohnt es sich überhaupt, einen Anwalt einzuschalten?',
    'faq.a1': 'Am besten, bevor der Schaden da ist. Viele Probleme lassen sich durch ein kurzes Gespräch frühzeitig abfangen, noch bevor ein echter Streit oder finanzielle Nachteile entstehen. Zu langes Warten macht die Sache meistens nicht einfacher, sondern am Ende nur komplizierter und teurer für Sie. Wir sagen Ihnen nach einem ersten Blick, ob wir eingreifen sollten oder ob sich das Problem anders lösen lässt.',
    'faq.q2': 'Was passiert beim ersten Gespräch — und was soll ich mitbringen?',
    'faq.a2': 'Das Erstgespräch dient dazu, Ihre Situation zu verstehen, nicht zu bewerten. Bringen Sie alles mit, was relevant erscheint: Verträge, Korrespondenz, Bescheide, Fristen. Je vollständiger das Bild, desto klarer können wir einschätzen, was möglich ist — und was nicht.',
    'faq.q3': 'Wie setzen sich Ihre Honorare zusammen und wann erhalte ich die erste Kosteneinschätzung?',
    'faq.a3': 'Absolute Transparenz ist das Fundament unserer Zusammenarbeit. Nach Sichtung und Analyse Ihrer Unterlagen erhalten Sie von uns eine fundierte Aufwandsschätzung. Wir definieren die Abrechnungsbasis gemeinsam und schriftlich, bevor wir das erste Dokument für Sie aufsetzen. So wissen Sie von Anfang an exakt, woran Sie sind.',
    'faq.q4': 'Habe ich während des laufenden Mandats die volle finanzielle Kontrolle und Transparenz?',
    'faq.a4': 'Ja, zu jedem Zeitpunkt. Wir arbeiten mit transparenten Zwischenabrechnungen und detaillierten Leistungsnachweisen. Sollte sich die Dynamik Ihres Verfahrens verändern oder ein unvorhersehbarer Mehraufwand entstehen, legen wir Ihnen die strategischen Optionen und die damit verbundenen Kosten offen, bevor diese entstehen. Überraschungen auf der Schlussrechnung gibt es bei uns nicht.',
    'faq.q5': 'Ich habe Recht — warum muss ich das noch beweisen?',
    'faq.a5': 'Recht zu haben und Recht zu bekommen sind zwei verschiedene Dinge. Das Rechtssystem bewertet Sachverhalte auf Basis von Beweisen, Fristen und Verfahrensregeln. Unsere Aufgabe ist es, Ihre Position so stark wie möglich zu machen — innerhalb dieser Spielregeln.',

    // Contact
    'contact.heading':        'Sprechen Sie mit uns.',
    'contact.office.schaan':  'Büro Schaan',
    'contact.office.wien':    'Büro Wien',
    'contact.office.krakau':  'Büro Krakau',
    'contact.country.li':     'Fürstentum Liechtenstein',
    'contact.country.at':     'Österreich',
    'contact.country.pl':     'Polen',
    'contact.phone':          'Telefon',

    // Footer
    'footer.rights':  'Alle Rechte vorbehalten.',
    'footer.privacy': 'Datenschutz',
    'footer.imprint': 'Impressum',

    // Shared sub-pages
    'page.back': '← Zurück zur Startseite',

    // Private Clients
    'pc.h1':      'Private Clients & Non-Profits',
    'pc.p1':      'Liechtenstein bietet eine der dichtesten Strukturlandschaften im deutschsprachigen Raum — Stiftung, Trust, Anstalt und weitere Vehikel unter einem Rechtsdach, das auf internationale Privatkunden und gemeinnützige Organisationen gleichermaßen ausgerichtet ist.',
    'pc.p2':      'Mairhofer Advokatur begleitet Sie rechtlich durch die Wahl, Errichtung und laufende Governance dieser Strukturen — von der einfachen Familienstiftung bis zum komplexen Trust-Geflecht.',
    'pc.p3':      'Wo die juristische Arbeit endet, beginnt die treuhänderische: In enger Zusammenarbeit mit Lumen Advisory stellen wir sicher, dass Ihre Struktur nicht nur rechtlich sauber ist, sondern auch professionell verwaltet wird.',
    'pc.closing': 'Zwei unabhängige Disziplinen, ein gemeinsames Mandat.',

    // Digital Business
    'db.h1':      'Digital Business',
    'db.p1':      'Das Digitale ist kein Trend mehr — es ist Alltag, und längst auch Rechtsraum. Wer online handelt, publiziert, Daten verarbeitet oder eine Plattform betreibt, bewegt sich in einem Umfeld, das rechtliche Fragen genauso stellt wie die analoge Welt — oft schneller und mit weniger Präzedenz.',
    'db.p2':      'Mairhofer Advokatur begleitet Unternehmen und Privatpersonen durch diesen Bereich: von Vertragsfragen rund um digitale Geschäftsmodelle über Datenschutz und KI-Compliance bis hin zu Reputationsschutz und Persönlichkeitsrechtsverletzungen im Netz.',
    'db.closing': 'Wer öffentlich sichtbar ist — als Unternehmen, Marke oder Person — ist auch angreifbar. Wenn es passiert, wissen wir, was zu tun ist.',

    // Finanzmarktrecht
    'fm.h1':      'Bank-, Versicherungs- und Finanzmarktrecht',
    'fm.p1':      'Finanzinstitute, Versicherungen und Unternehmen bewegen sich in einem Umfeld, in dem Verträge nicht nur rechtlich korrekt sein müssen — sie müssen standhalten, wenn es darauf ankommt.',
    'fm.p2':      'Mairhofer Advokatur begleitet Banken und KMU bei der Ausgestaltung und Prüfung von Finanzierungsverträgen, Sicherheitsvereinbarungen und regulatorischen Anforderungen.',
    'fm.closing': 'Für Mandanten, die eine Struktur errichten und verwalten lassen möchten, endet die Arbeit nicht beim Notar: In Zusammenarbeit mit Lumen Advisory übernehmen wir die vollständige Begleitung — der Mandant übergibt die Unterlagen, der Rest liegt bei uns.',

    // Gesellschaftsrecht
    'gr.h1':      'Gesellschafts- und Handelsrecht',
    'gr.p1':      'Verträge sind das Fundament jeder geschäftlichen Beziehung — und oft das Erste, das unter Druck nachgibt.',
    'gr.p2':      'Mairhofer Advokatur begleitet Unternehmen, Gemeinden und öffentliche Körperschaften bei allem, was rechtlich fixiert werden muss: von Gesellschaftsverträgen und Kooperationen bis hin zu Grundstücksübertragungen und Eigentumsrechten.',
    'gr.p3':      'Wir lesen nicht nur den Text, den Sie uns vorlegen — wir denken mit, stellen die unbequemen Fragen und erkennen, wo ein Vertrag auf den ersten Blick solide wirkt, auf den zweiten aber Lücken lässt.',
    'gr.closing': 'Wer seine Vereinbarungen von Anfang an sauber aufsetzt, spart sich später das, was kein Mandant will: einen Konflikt, der vermeidbar gewesen wäre.',

    // Immobilienrecht
    'ir.h1':      'Immobilien- und Baurecht',
    'ir.p1':      'Immobilien und Baurecht sind Bereiche, wo ein übersehenes Detail auf dem Papier grössere Konsequenzen haben kann als jeder Baumangel.',
    'ir.p2':      'Unsere tägliche Arbeit umfasst Mandate von Gemeinden, Privatpersonen und Bauunternehmen im Liechtensteiner Markt — Grundstückstausche, Schenkungen, Eigentumsübertragungen. Jede Transaktion wird rechtlich sauber dokumentiert und korrekt ins Grundbuch eingetragen.',
    'ir.closing': 'Baufirmen werden entlang ihrer Projekte begleitet, bei der Aushandlung von Verträgen mit Auftraggebern oder Subunternehmern, aber auch dann, wenn im laufenden Betrieb rechtliche Fragen auftauchen, die schnelle Antworten brauchen.',

    // Streitbeilegung
    'sb.h1':      'Streitbeilegung und Prozessführung',
    'sb.p1':      'Wenn ein Streit nicht mehr aussergerichtlich gelöst werden kann, braucht es jemanden, der den Weg durch das Verfahren kennt.',
    'sb.p2':      'Privatpersonen werden vor Gericht und gegenüber Behörden vertreten — sei es in zivilrechtlichen Auseinandersetzungen, bei Rekursen gegen Behördenentscheide oder in anderen strittigen Angelegenheiten.',
    'sb.p3':      'Verfahren dauern oft länger als erwartet und verlaufen selten geradlinig. Entscheidungen der Gegenseite, neue Beweismittel oder prozessuale Wendungen verlangen eine laufende Anpassung der Strategie.',
    'sb.closing': 'Die Aufgabe ist, die Position des Mandanten in jeder Phase klar und konsequent zu vertreten — vom ersten Schriftsatz bis zum Urteil.',

    // Team
    'team.h1':          'Unser Team',
    'team.remo.bio1':   'Remo Mairhofer ist Rechtsanwalt und lizenzierter Treuhänder, Gründer von MAIRHOFER ADVOKATUR und Gründer und CEO der Lumen Advisory Trust reg. in Liechtenstein. Seine Arbeit konzentriert sich auf die Gründung, Verwaltung und laufende Überwachung von Treuhand- und Stiftungsstrukturen und berät Intermediäre und Privatpersonen in grenzüberschreitenden Strukturen.',
    'team.remo.bio2':   'Er hat Abschlüsse in Jura und Banking & Finance von der Universität St. Gallen und einen LL.M. von der Universität Sydney. Er ist in der liechtensteinischen Kanzlei zugelassen, hat die liechtensteinischen Treuhänderprüfungen bestanden und ist Stellvertreter Richter am Verfassungsgericht Liechtensteins.',
    'team.tomasz.bio1': 'Dr. Tomasz Klimek ist öffentlicher Notar und Rechtsanwalt in Liechtenstein sowie Partner bei Mairhofer Advokatur. Er berät und beaufsichtigt rechtlich komplexe Treuhand- und Unternehmensstrukturen, mit besonderem Fokus auf grenzüberschreitende Stiftungen, Holdinggesellschaften und Vermögensverwaltungsanordnungen in Liechtenstein, Österreich und Polen.',
    'team.tomasz.bio2': 'Dr. Klimek hat einen Doktor der Rechte von der Universität Wien und mehrere LL.M. Abschlüsse in Unternehmens-, Stiftungs- und Treuhandrecht. Er ist in Liechtenstein, Österreich und Polen zugelassen und ist der einzige polnischsprachige Rechtsanwalt in Liechtenstein, was ihm ermöglicht, Gerichtsbarkeiten mit Präzision und Verantwortung zu überbrücken.',
    'team.linkedin':    'LinkedIn-Profil',
    'team.back':        '← Zurück zum Team',
    'team.meet.tomasz': 'Lernen Sie auch <a href="tomasz-klimek.html">Dr. Tomasz Klimek</a> kennen, Notar und Partner.',
    'team.meet.remo':   'Lernen Sie auch <a href="remo-mairhofer.html">Remo Mairhofer</a> kennen, Gründer und CEO.',

    // Sitemap
    'sitemap.h1':     'Sitemap',
    'sitemap.group1': 'Startseite',
    'sitemap.group2': 'Rechtsgebiete',
    'sitemap.group3': 'Kanzlei',
    'sitemap.group4': 'Rechtliches',

    // Data Protection
    'privacy.h1':          'Datenschutzerklärung',
    'privacy.s1.title':    'I. Name und Anschrift des Verantwortlichen',
    'privacy.s1.p1':       'Der Verantwortliche im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:',
    'privacy.s2.title':    'II. Allgemeines zur Datenverarbeitung',
    'privacy.s2.sub1.t':   '1. Umfang der Verarbeitung personenbezogener Daten',
    'privacy.s2.sub1.p1':  'Unsere Verarbeitung personenbezogener Daten unserer Nutzer beschränkt sich auf jene Daten, die zur Bereitstellung einer funktionsfähigen Internetseite sowie unserer Inhalte und Leistungen erforderlich sind. Die Verarbeitung personenbezogener Daten unserer Nutzer erfolgt nur zu den mit ihnen vereinbarten Zwecken oder wenn eine sonstige rechtliche Grundlage (im Sinn der DSGVO) vorliegt. Es werden nur solche personenbezogenen Daten erhoben, die für die Durchführung und Abwicklung unserer Aufgaben und Leistungen tatsächlich erforderlich sind oder die Sie uns freiwillig zur Verfügung gestellt haben.',
    'privacy.s2.sub2.t':   '2. Ihre Rechte (Betroffenenrechte)',
    'privacy.s2.sub2.p1':  'Sie haben das Recht, Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen. Insbesondere können Sie Auskunft über die Verarbeitungszwecke, die Kategorien der personenbezogenen Daten, die Kategorien von Empfängern, gegenüber denen Ihre Daten offengelegt wurden oder werden, die geplante Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch, Datenübertragung, die Herkunft Ihrer Daten, sofern diese nicht bei uns erhoben wurden, sowie über das Bestehen einer automatisierten Entscheidungsfindung einschliesslich Profiling verlangen.',
    'privacy.s2.sub2.p2':  'Sie haben auch das Recht, eine allenfalls erteilte Einwilligung zur Nutzung Ihrer personenbezogenen Daten jederzeit zu widerrufen.',
    'privacy.s2.sub2.p3':  'Sofern Sie der Auffassung sind, dass die Verarbeitung Ihrer personenbezogenen Daten durch uns im Widerspruch zu den geltenden Datenschutzbestimmungen steht, haben Sie die Möglichkeit, sich bei der Datenschutzstelle zu beschweren.',
    'privacy.s3.title':    'III. Beschreibung und Umfang der Datenverarbeitung',
    'privacy.s3.sub1.t':   '1. Server Logfiles',
    'privacy.s3.sub1.p1':  'Wenn Sie auf unsere Website zugreifen, werden automatisch mittels eines Cookies Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und ähnliches. Hierbei handelt es sich ausschließlich um Informationen, welche keine Rückschlüsse auf Ihre Person zulassen.',
    'privacy.s3.sub1.p2':  'Diese Informationen sind technisch notwendig, um von Ihnen angeforderte Inhalte von Webseiten korrekt auszuliefern und fallen bei Nutzung des Internets zwingend an. Sie werden insbesondere zu folgenden Zwecken verarbeitet:',
    'privacy.s3.sub1.li1': 'Sicherstellung eines problemlosen Verbindungsaufbaus der Website,',
    'privacy.s3.sub1.li2': 'Sicherstellung einer reibungslosen Nutzung unserer Website,',
    'privacy.s3.sub1.li3': 'Auswertung der Systemsicherheit und -stabilität sowie',
    'privacy.s3.sub1.li4': 'zu weiteren administrativen Zwecken.',
    'privacy.s3.sub1.p3':  'Die Verarbeitung Ihrer personenbezogenen Daten basiert auf unserem berechtigten Interesse aus den vorgenannten Zwecken zur Datenerhebung. Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu ziehen. Empfänger der Daten sind nur die verantwortliche Stelle und ggf. Auftragsverarbeiter.',
    'privacy.s3.sub1.p4':  'Anonyme Informationen dieser Art werden von uns ggfs. statistisch ausgewertet, um unseren Internetauftritt und die dahinterstehende Technik zu optimieren.',
    'privacy.s3.sub2.t':   '2. Verwendung von Scriptbibliotheken (Google Webfonts)',
    'privacy.s3.sub2.p1':  'Um unsere Inhalte browserübergreifend korrekt und grafisch ansprechend darzustellen, verwenden wir auf dieser Website Scriptbibliotheken und Schriftbibliotheken wie z.B. Google Webfonts. Google Webfonts werden zur Vermeidung mehrfachen Ladens in den Cache Ihres Browsers übertragen. Falls der Browser die Google Webfonts nicht unterstützt oder den Zugriff unterbindet, werden Inhalte in einer Standardschrift angezeigt.',
    'privacy.s3.sub2.p2':  'Der Aufruf von Scriptbibliotheken oder Schriftbibliotheken löst automatisch eine Verbindung zum Betreiber der Bibliothek aus. Dabei ist es theoretisch möglich – aktuell allerdings auch unklar ob und ggf. zu welchen Zwecken – dass Betreiber entsprechender Bibliotheken Daten erheben.',
    'privacy.s3.sub2.p3':  'Die Datenschutzrichtlinie des Bibliothekbetreibers Google finden Sie hier:',
    'privacy.s3.sub3.t':   '3. Cookies',
    'privacy.s3.sub3.p1':  'Wir verwenden auf unserer Webseite Cookies, um damit unser Angebot nutzerfreundlich zu gestalten. Cookies sind kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät (Laptop, Tablet, Smartphone etc.) gespeichert werden, wenn Sie unsere Seite besuchen. Dadurch können wir Ihren Browser beim nächsten Besuch wieder erkennen.',
    'privacy.s3.sub3.p2':  'Sollten Sie dies nicht wünschen, können Sie Ihren Browser so einrichten, dass er Sie über das Setzen von Cookies informiert und Sie diese im Einzelfall erlauben. Wir weisen Sie allerdings darauf hin, dass eine Deaktivierung dazu führt, dass Sie nicht alle Funktionen unserer Webseite nutzen können.',
    'privacy.s3.sub4.t':   '4. Kontakt',
    'privacy.s3.sub4.p1':  'Wenn Sie per E-Mail Kontakt mit uns aufnehmen, werden Ihre Angaben nur für die Bearbeitung der Anfrage, mögliche damit zusammenhängende weitere Fragen, gespeichert und nur im Rahmen der Anfrage verwendet.',
    'privacy.s4.title':    'IV. Datensicherheit',
    'privacy.s4.p1':       'Wir verwenden innerhalb des Webseite-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. Ob eine einzelne Seite unseres Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an der geschlossenen Darstellung des Schlüssel- beziehungsweise Schloss-Symbols in der Adressleiste Ihres Browsers.',
    'privacy.s4.p2':       'Darüber hinaus wenden wir weitere geeignete technische und organisatorische Sicherheitsmassnahmen an, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmassnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.',

    // Imprint
    'imprint.h1':       'Impressum',
    'imprint.s1.title': 'Verantwortlich für den Inhalt',
    'imprint.s2.title': 'Art. 5 ECG',
    'imprint.s2.p1':    'Die Disziplinargewalt über die Rechtsanwälte wird vom Fürstlichen Obergericht ausgeübt.',
    'imprint.s2.p2':    'Remo Mairhofer ist Mitglied der Liechtensteinischen Rechtsanwaltskammer (RAK) und untersteht insbesondere folgenden Gesetzen und Richtlinien: Gesetz über die Rechtsanwälte; Rechtsanwaltstarifgesetz; Rechtsanwaltstarifverordnung; Standesrichtlinien und Honorarrichtlinien der RAK.',
    'imprint.s3.title': 'Inhalt des Onlineangebotes',
    'imprint.s3.p1':    'Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens des Autors kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Alle Angebote sind freibleibend und unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.',
    'imprint.s4.title': 'Verweise und Links',
    'imprint.s4.p1':    'Bei direkten oder indirekten Verweisen auf fremde Webseiten («Hyperlinks»), die ausserhalb des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschliesslich in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern. Der Autor erklärt hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten erkennbar waren. Auf die aktuelle und zukünftige Gestaltung, die Inhalte oder die Urheberschaft der verlinkten/verknüpften Seiten hat der Autor keinerlei Einfluss. Deshalb distanziert er sich hiermit ausdrücklich von allen Inhalten aller verlinkten/verknüpften Seiten, die nach der Linksetzung verändert wurden. Diese Feststellung gilt für alle innerhalb des eigenen Internetangebotes gesetzten Links und Verweise sowie für Fremdeinträge in vom Autor eingerichteten Gästebüchern, Diskussionsforen, Linkverzeichnissen, Mailinglisten und in allen anderen Formen von Datenbanken, auf deren Inhalt externe Schreibzugriffe möglich sind. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.',
    'imprint.s5.title': 'Urheber- und Kennzeichenrecht',
    'imprint.s5.p1':    'Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Bilder, Grafiken, Tondokumente, Videosequenzen und Texte zu beachten, von ihm selbst erstellte Bilder, Grafiken, Tondokumente, Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente, Videosequenzen und Texte zurückzugreifen. Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein aufgrund der blossen Nennung ist nicht der Schluss zu ziehen, dass Markenzeichen nicht durch Rechte Dritter geschützt sind! Das Copyright für veröffentlichte, vom Autor selbst erstellte Objekte bleibt allein beim Autor der Seiten. Eine Vervielfältigung oder Verwendung solcher Grafiken, Tondokumente, Videosequenzen und Texte in anderen elektronischen oder gedruckten Publikationen ist ohne ausdrückliche Zustimmung des Autors nicht gestattet.',

    // LinkedIn landing page
    'li.hero.label':           'Mairhofer Advokatur · Liechtenstein · Wien · Kraków',
    'li.hero.heading':         'Juristische Präzision.<br /><em>Drei Jurisdiktionen.</em>',
    'li.hero.sub':             'Persönliche Rechtsberatung in Liechtenstein, Österreich und Polen — für Mandanten, die klare Antworten erwarten.',
    'li.hero.cta':             'Schreiben Sie uns',
    'li.services.label':       'Rechtsgebiete',
    'li.services.heading':     'Was wir tun — und worin wir <em>führend</em> sind.',
    'li.card.featured.badge':  'Unser Kernbereich',
    'li.card1.title':          'Private Clients & Non-Profits',
    'li.card1.desc':           'Stiftungen, Trusts und Anstalten in Liechtenstein. Remo Mairhofer ist zugelassener Treuhänder — juristische und treuhänderische Beratung aus einer Hand.',
    'li.card2.title':          'Digital Business',
    'li.card2.desc':           'Startups, Tokenisierung, KI-Regulierung und digitale Verträge — Recht für die digitale Wirtschaft.',
    'li.card3.title':          'Bank-, Versicherungs- und Finanzmarktrecht',
    'li.card3.desc':           'Bankrecht, Versicherungsrecht und Finanzmarktaufsicht in Liechtenstein und Österreich.',
    'li.card4.title':          'Gesellschafts- und Handelsrecht',
    'li.card4.desc':           'Gründung, Umstrukturierung und M&A in drei Jurisdiktionen. Gesellschaftsrechtliche Strukturen, die halten.',
    'li.card5.title':          'Immobilien- und Baurecht',
    'li.card5.desc':           'Kauf, Miete, Pacht und Baurecht in Liechtenstein, Österreich und Polen.',
    'li.card6.title':          'Streitbeilegung und Prozessführung',
    'li.card6.desc':           'Litigation und alternative Streitbeilegung — wenn Verhandeln nicht mehr reicht.',
    'li.contact.label':        'Kontakt',
    'li.contact.heading':      'Ihr nächster Schritt<br />ist ein <em>E-Mail.</em>',
    'li.contact.sub':          'Wir antworten persönlich — kein Kontaktformular, kein Callcenter.',
    'li.office.schaan':        'Büro Schaan',
    'li.office.wien':          'Büro Wien',
    'li.office.krakow':        'Büro Kraków',
    'li.learn.more':           'Mehr erfahren →',
  },

  en: {
    // Nav
    'nav.about':    'About',
    'nav.services': 'Services',
    'nav.team':     'Team',
    'nav.faq':      'FAQ',
    'nav.contact':  'Contact',

    // Hero
    'hero.heading': 'Your concern is the <em>starting point.</em>',

    // About
    'about.heading': 'The right lawyer<br />listens first.',
    'about.p1': 'Clients rarely arrive with a structured mandate. They arrive with a problem — one that is often urgent, rarely simple, and deeply personal.',
    'about.p2': 'Size and reputation alone do not make a good law firm. It is the lawyer who listens first, understands the full picture, and then acts with precision.',
    'about.p3': 'That precision comes from work that rarely shows. From the facts to the opposing position through to the legal foundations — building the picture piece by piece until the right argument becomes clear.',
    'about.p4': 'At Mairhofer Advokatur, that is where we begin. Every matter starts with understanding what is actually at stake — for you, not just on paper.',

    // Practice areas
    'practice.heading': 'Practice Areas',
    'practice.card1': 'Private Clients & Non-Profits',
    'practice.card2': 'Digital Business',
    'practice.card3': 'Banking, Insurance & Financial Markets Law',
    'practice.card4': 'Corporate & Commercial Law',
    'practice.card5': 'Real Estate & Construction Law',
    'practice.card6': 'Dispute Resolution & Litigation',

    // Partners
    'partners.heading':       'Your Contact',
    'partners.remo.title':    'Attorney-at-Law | Trustee | <span class="accent">Founder & CEO</span>',
    'partners.tomasz.title':  'Attorney-at-Law (FL, A & PL) | Public Notary | <span class="accent">Partner</span>',
    'partners.viewprofile':   'View profile →',

    // FAQ
    'faq.heading': 'Frequently Asked Questions',
    'faq.q1': 'When does it actually make sense to involve a lawyer?',
    'faq.a1': 'Ideally, before the damage is done. Many problems can be caught early through a brief conversation, before a real dispute or financial disadvantage arises. Waiting too long rarely makes things simpler — it usually makes them more complicated and more expensive. After an initial review, we will tell you whether we should intervene or whether the problem can be resolved another way.',
    'faq.q2': 'What happens in the first meeting — and what should I bring?',
    'faq.a2': 'The initial consultation is about understanding your situation, not judging it. Bring everything that seems relevant: contracts, correspondence, decisions, deadlines. The more complete the picture, the more clearly we can assess what is possible — and what is not.',
    'faq.q3': 'How are your fees structured and when will I receive the first cost estimate?',
    'faq.a3': 'Absolute transparency is the foundation of our collaboration. After reviewing and analysing your documents, we provide you with a well-founded cost estimate. We define the billing basis together and in writing before we draft the first document for you. This way, you know exactly where you stand from the very beginning.',
    'faq.q4': 'Do I have full financial control and transparency during an ongoing mandate?',
    'faq.a4': 'Yes, at all times. We work with transparent interim billing and detailed records of services rendered. Should the dynamics of your case change or unforeseen additional effort arise, we will present you with the strategic options and associated costs before they occur. There are no surprises on the final invoice.',
    'faq.q5': 'I am in the right — why do I still have to prove it?',
    'faq.a5': 'Being right and getting justice are two different things. The legal system evaluates facts on the basis of evidence, deadlines and procedural rules. Our job is to make your position as strong as possible — within these rules.',

    // Contact
    'contact.heading':        'Get in touch.',
    'contact.office.schaan':  'Schaan Office',
    'contact.office.wien':    'Vienna Office',
    'contact.office.krakau':  'Kraków Office',
    'contact.country.li':     'Principality of Liechtenstein',
    'contact.country.at':     'Austria',
    'contact.country.pl':     'Poland',
    'contact.phone':          'Phone',

    // Footer
    'footer.rights':  'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.imprint': 'Legal Notice',

    // Shared sub-pages
    'page.back': '← Back to Home',

    // Private Clients
    'pc.h1':      'Private Clients & Non-Profits',
    'pc.p1':      'Liechtenstein offers one of the most diverse structural landscapes in the German-speaking world — foundations, trusts, establishments and further vehicles under a single legal framework designed equally for international private clients and non-profit organisations.',
    'pc.p2':      'Mairhofer Advokatur guides you through the selection, formation and ongoing governance of these structures — from a straightforward family foundation to a complex trust arrangement.',
    'pc.p3':      'Where the legal work ends, the fiduciary work begins: in close collaboration with Lumen Advisory, we ensure that your structure is not only legally sound but also professionally managed.',
    'pc.closing': 'Two independent disciplines. One shared mandate.',

    // Digital Business
    'db.h1':      'Digital Business',
    'db.p1':      'Digital is no longer a trend — it is everyday reality, and long since a legal space in its own right. Anyone who trades, publishes, processes data or operates a platform online navigates an environment that raises legal questions just as the physical world does — often faster and with less precedent.',
    'db.p2':      'Mairhofer Advokatur advises companies and individuals across this field: from contractual questions around digital business models and data protection to AI compliance, reputation protection and violations of personal rights online.',
    'db.closing': 'Anyone who is publicly visible — as a business, a brand or a person — is also exposed. When it happens, we know what to do.',

    // Finanzmarktrecht
    'fm.h1':      'Banking, Insurance & Financial Markets Law',
    'fm.p1':      'Financial institutions, insurers and businesses operate in an environment where contracts must not only be legally correct — they must hold when it matters.',
    'fm.p2':      'Mairhofer Advokatur advises banks and SMEs on the structuring and review of financing agreements, security arrangements and regulatory requirements.',
    'fm.closing': 'For clients who wish to establish and administer a structure, the work does not end at the notary: in collaboration with Lumen Advisory, we provide complete end-to-end support — the client hands over the documents and we handle the rest.',

    // Gesellschaftsrecht
    'gr.h1':      'Corporate & Commercial Law',
    'gr.p1':      'Contracts are the foundation of every business relationship — and often the first thing to give way under pressure.',
    'gr.p2':      'Mairhofer Advokatur advises companies, municipalities and public bodies on everything that needs to be set down in law: from articles of association and cooperation agreements to property transfers and ownership rights.',
    'gr.p3':      'We do not simply read the text you present to us — we think ahead, ask the uncomfortable questions and identify where a contract looks solid at first glance but reveals gaps on closer inspection.',
    'gr.closing': 'Those who structure their agreements correctly from the outset spare themselves what no client wants: a conflict that could have been avoided.',

    // Immobilienrecht
    'ir.h1':      'Real Estate & Construction Law',
    'ir.p1':      'Real estate and construction law are areas where an overlooked detail on paper can have greater consequences than any structural defect.',
    'ir.p2':      'Our day-to-day work includes mandates from municipalities, private individuals and construction companies in the Liechtenstein market — land exchanges, gifts, transfers of ownership. Every transaction is documented with legal precision and correctly registered in the land register.',
    'ir.closing': 'Construction firms are supported throughout their projects — in negotiating contracts with clients or subcontractors, and when legal questions arise during operations that require prompt answers.',

    // Streitbeilegung
    'sb.h1':      'Dispute Resolution & Litigation',
    'sb.p1':      'When a dispute can no longer be resolved out of court, you need someone who knows the way through the proceedings.',
    'sb.p2':      'Private individuals are represented before courts and authorities — whether in civil disputes, appeals against administrative decisions or other contentious matters.',
    'sb.p3':      'Proceedings often take longer than expected and rarely run in a straight line. Decisions by the opposing party, new evidence or procedural developments require constant strategic adjustment.',
    'sb.closing': 'The task is to represent the client\'s position clearly and consistently at every stage — from the first submission to the final judgment.',

    // Team
    'team.h1':          'Our Team',
    'team.remo.bio1':   'Remo Mairhofer is an attorney-at-law and licensed trustee, founder of MAIRHOFER ADVOKATUR and founder and CEO of Lumen Advisory Trust reg. in Liechtenstein. His work focuses on the formation, administration and ongoing supervision of trust and foundation structures, and he advises intermediaries and private individuals on cross-border structures.',
    'team.remo.bio2':   'He holds degrees in Law and Banking & Finance from the University of St. Gallen and an LL.M. from the University of Sydney. He is admitted to the Liechtenstein bar, has passed the Liechtenstein trustee examinations and serves as a substitute judge at the Constitutional Court of Liechtenstein.',
    'team.tomasz.bio1': 'Dr. Tomasz Klimek is a public notary and attorney-at-law in Liechtenstein and a partner at Mairhofer Advokatur. He advises and oversees legally complex trust and corporate structures, with a particular focus on cross-border foundations, holding companies and asset management arrangements in Liechtenstein, Austria and Poland.',
    'team.tomasz.bio2': 'Dr. Klimek holds a doctorate in law from the University of Vienna and several LL.M. degrees in corporate, foundation and trust law. He is admitted to the bar in Liechtenstein, Austria and Poland, and is the only Polish-speaking attorney in Liechtenstein — enabling him to bridge jurisdictions with precision and responsibility.',
    'team.linkedin':    'LinkedIn Profile',
    'team.back':        '← Back to team',
    'team.meet.tomasz': 'Also meet <a href="tomasz-klimek.html">Dr. Tomasz Klimek</a>, Public Notary and Partner.',
    'team.meet.remo':   'Also meet <a href="remo-mairhofer.html">Remo Mairhofer</a>, Founder and CEO.',

    // Sitemap
    'sitemap.h1':     'Sitemap',
    'sitemap.group1': 'Home',
    'sitemap.group2': 'Practice Areas',
    'sitemap.group3': 'Firm',
    'sitemap.group4': 'Legal',

    // Data Protection
    'privacy.h1':          'Privacy Policy',
    'privacy.s1.title':    'I. Name and Address of the Controller',
    'privacy.s1.p1':       'The controller within the meaning of the General Data Protection Regulation (GDPR) is:',
    'privacy.s2.title':    'II. General Information on Data Processing',
    'privacy.s2.sub1.t':   '1. Scope of Processing of Personal Data',
    'privacy.s2.sub1.p1':  'Our processing of personal data of our users is limited to the data necessary to provide a functional website and our content and services. Personal data of our users is processed only for the purposes agreed with them or where another legal basis under the GDPR exists. Only such personal data is collected as is actually required for the performance and handling of our tasks and services, or which you have provided to us voluntarily.',
    'privacy.s2.sub2.t':   '2. Your Rights (Data Subject Rights)',
    'privacy.s2.sub2.p1':  'You have the right to request information about your personal data processed by us. In particular, you may request information about the purposes of processing, the categories of personal data, the categories of recipients to whom your data has been or will be disclosed, the planned storage period, the existence of a right to rectification, erasure, restriction of processing or objection, data portability, the origin of your data where it was not collected from you, and the existence of automated decision-making including profiling.',
    'privacy.s2.sub2.p2':  'You also have the right to withdraw any consent you may have given for the use of your personal data at any time.',
    'privacy.s2.sub2.p3':  'If you consider that the processing of your personal data by us is contrary to applicable data protection law, you have the right to lodge a complaint with the data protection authority.',
    'privacy.s3.title':    'III. Description and Scope of Data Processing',
    'privacy.s3.sub1.t':   '1. Server Log Files',
    'privacy.s3.sub1.p1':  'When you access our website, general information is automatically collected via a cookie. This information (server log files) includes details such as the type of web browser, the operating system used, the domain name of your internet service provider and similar data. This information does not allow any conclusions to be drawn about your identity.',
    'privacy.s3.sub1.p2':  'This information is technically necessary in order to correctly deliver the website content you have requested and is inevitably generated when using the internet. It is processed in particular for the following purposes:',
    'privacy.s3.sub1.li1': 'Ensuring a smooth connection to the website,',
    'privacy.s3.sub1.li2': 'Ensuring smooth use of our website,',
    'privacy.s3.sub1.li3': 'Evaluating system security and stability, and',
    'privacy.s3.sub1.li4': 'For further administrative purposes.',
    'privacy.s3.sub1.p3':  'The processing of your personal data is based on our legitimate interest in the aforementioned purposes of data collection. We do not use your data to draw conclusions about your identity. Recipients of the data are only the controller and, where applicable, processors.',
    'privacy.s3.sub1.p4':  'We may use anonymous information of this kind for statistical analysis in order to optimise our website and the underlying technology.',
    'privacy.s3.sub2.t':   '2. Use of Script Libraries (Google Web Fonts)',
    'privacy.s3.sub2.p1':  'In order to display our content correctly and in a visually appealing manner across different browsers, we use script and font libraries such as Google Web Fonts on this website. Google Web Fonts are transferred to your browser\'s cache to avoid repeated loading. If your browser does not support Google Web Fonts or blocks access, content will be displayed in a standard font.',
    'privacy.s3.sub2.p2':  'Calling up script or font libraries automatically triggers a connection to the operator of the library. It is theoretically possible — though currently unclear whether and for what purposes — that operators of such libraries collect data.',
    'privacy.s3.sub2.p3':  'Google\'s privacy policy can be found here:',
    'privacy.s3.sub3.t':   '3. Cookies',
    'privacy.s3.sub3.p1':  'We use cookies on our website to make our services more user-friendly. Cookies are small files that your browser automatically creates and that are stored on your device (laptop, tablet, smartphone, etc.) when you visit our site. This allows us to recognise your browser on your next visit.',
    'privacy.s3.sub3.p2':  'If you do not wish this, you can configure your browser to notify you when cookies are set and to allow them only on a case-by-case basis. Please note, however, that disabling cookies may mean that you are unable to use all functions of our website.',
    'privacy.s3.sub4.t':   '4. Contact',
    'privacy.s3.sub4.p1':  'If you contact us by email, your details will be stored solely for the purpose of processing your enquiry and any related follow-up questions, and will only be used in the context of that enquiry.',
    'privacy.s4.title':    'IV. Data Security',
    'privacy.s4.p1':       'During your visit to our website, we use the widely used SSL (Secure Socket Layer) procedure in conjunction with the highest level of encryption supported by your browser. You can tell whether an individual page of our website is being transmitted in encrypted form by the closed key or padlock symbol in the address bar of your browser.',
    'privacy.s4.p2':       'In addition, we apply appropriate technical and organisational security measures to protect your data against accidental or intentional manipulation, partial or complete loss, destruction or unauthorised access by third parties. Our security measures are continuously updated in line with technological developments.',

    // Imprint
    'imprint.h1':       'Legal Notice',
    'imprint.s1.title': 'Responsible for Content',
    'imprint.s2.title': 'Art. 5 ECG',
    'imprint.s2.p1':    'Disciplinary authority over attorneys-at-law is exercised by the Princely Court of Appeal.',
    'imprint.s2.p2':    'Remo Mairhofer is a member of the Liechtenstein Bar Association (RAK) and is subject in particular to the following laws and guidelines: Law on Attorneys-at-Law; Attorneys\' Fees Act; Attorneys\' Fees Ordinance; Professional Rules and Fee Guidelines of the RAK.',
    'imprint.s3.title': 'Content of the Online Offer',
    'imprint.s3.p1':    'The author accepts no liability for the accuracy, correctness, completeness or quality of the information provided. Claims against the author relating to material or immaterial damage caused by the use or non-use of the information provided, or by the use of incorrect or incomplete information, are excluded in principle, unless the author can be shown to have acted with wilful intent or gross negligence. All offers are subject to change and non-binding. The author expressly reserves the right to modify, supplement or delete parts of the pages or the entire offer without prior notice, or to cease publication temporarily or permanently.',
    'imprint.s4.title': 'References and Links',
    'imprint.s4.p1':    'In the case of direct or indirect references to third-party websites ("hyperlinks") that lie outside the author\'s area of responsibility, liability would only arise if the author had knowledge of the content and it were technically possible and reasonable to prevent use in the case of unlawful content. The author hereby expressly declares that at the time of linking no illegal content was discernible on the pages to be linked. The author has no influence over the current or future design, content or authorship of the linked pages and therefore expressly dissociates himself from all content of all linked pages that were changed after the link was set. This applies to all links and references set within the author\'s own website, as well as to third-party entries in guest books, discussion forums, link directories, mailing lists and all other forms of database to which external write access is possible. Liability for illegal, incorrect or incomplete content and in particular for damages arising from the use or non-use of such information rests solely with the provider of the page to which reference was made, not with the party who merely refers to the respective publication via links.',
    'imprint.s5.title': 'Copyright and Trademark Law',
    'imprint.s5.p1':    'The author endeavours to observe the copyrights of the images, graphics, sound documents, video sequences and texts used in all publications, to use images, graphics, sound documents, video sequences and texts created by the author, or to make use of licence-free graphics, sound documents, video sequences and texts. All brand names and trademarks mentioned within the online offer and where applicable protected by third parties are subject without restriction to the provisions of applicable trademark law and the ownership rights of the respective registered owners. The mere mention of a trademark does not imply that it is not protected by third-party rights. The copyright for objects published by the author and created by the author remains solely with the author. Reproduction or use of such graphics, sound documents, video sequences and texts in other electronic or printed publications is not permitted without the express consent of the author.',

    // LinkedIn landing page
    'li.hero.label':           'Mairhofer Advokatur · Liechtenstein · Vienna · Kraków',
    'li.hero.heading':         'Legal precision.<br /><em>Three jurisdictions.</em>',
    'li.hero.sub':             'Personal legal counsel in Liechtenstein, Austria and Poland — for clients who expect clear answers.',
    'li.hero.cta':             'Write to us',
    'li.services.label':       'Practice Areas',
    'li.services.heading':     'What we do — and where we <em>lead.</em>',
    'li.card.featured.badge':  'Our core area',
    'li.card1.title':          'Private Clients & Non-Profits',
    'li.card1.desc':           'Foundations, trusts and establishments in Liechtenstein. Remo Mairhofer is a licensed trustee — legal and fiduciary advice from one source.',
    'li.card2.title':          'Digital Business',
    'li.card2.desc':           'Startups, tokenisation, AI regulation and digital contracts — law for the digital economy.',
    'li.card3.title':          'Banking, Insurance & Financial Markets Law',
    'li.card3.desc':           'Banking law, insurance law and financial market supervision in Liechtenstein and Austria.',
    'li.card4.title':          'Corporate & Commercial Law',
    'li.card4.desc':           'Formation, restructuring and M&A across three jurisdictions. Corporate structures built to last.',
    'li.card5.title':          'Real Estate & Construction Law',
    'li.card5.desc':           'Purchase, lease and construction law in Liechtenstein, Austria and Poland.',
    'li.card6.title':          'Dispute Resolution & Litigation',
    'li.card6.desc':           'Litigation and alternative dispute resolution — when negotiation is no longer enough.',
    'li.contact.label':        'Contact',
    'li.contact.heading':      'Your next step<br />is an <em>email.</em>',
    'li.contact.sub':          'We respond personally — no contact form, no call centre.',
    'li.office.schaan':        'Schaan Office',
    'li.office.wien':          'Vienna Office',
    'li.office.krakow':        'Kraków Office',
    'li.learn.more':           'Learn more →',
  }
};

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang]?.[key] !== undefined) el.textContent = translations[lang][key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang]?.[key] !== undefined) el.innerHTML = translations[lang][key];
  });

  document.querySelectorAll('[data-lang]').forEach(btn => {
    const isActive = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Only apply language if user previously chose EN — German is already in the HTML,
  // so calling applyLanguage('de') would rebuild identical DOM nodes after first paint
  // and cause measurable layout shift (CLS).
  if (localStorage.getItem('lang') === 'en') applyLanguage('en');

  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
  });
});
