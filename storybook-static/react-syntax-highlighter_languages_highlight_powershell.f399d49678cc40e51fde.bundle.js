(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{1763:function(module,exports){module.exports=function(hljs){var KEYWORDS={keyword:"if else foreach return do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch hidden static parameter"},BACKTICK_ESCAPE={begin:"`[\\s\\S]",relevance:0},VAR={className:"variable",variants:[{begin:/\$\B/},{className:"keyword",begin:/\$this/},{begin:/\$[\w\d][\w\d_:]*/}]},QUOTE_STRING={className:"string",variants:[{begin:/"/,end:/"/},{begin:/@"/,end:/^"@/}],contains:[BACKTICK_ESCAPE,VAR,{className:"variable",begin:/\$[A-z]/,end:/[^A-z]/}]},APOS_STRING={className:"string",variants:[{begin:/'/,end:/'/},{begin:/@'/,end:/^'@/}]},PS_COMMENT=hljs.inherit(hljs.COMMENT(null,null),{variants:[{begin:/#/,end:/$/},{begin:/<#/,end:/#>/}],contains:[{className:"doctag",variants:[{begin:/\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/},{begin:/\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/}]}]}),CMDLETS={className:"built_in",variants:[{begin:"(".concat("Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|Limit|Merge|New|Out|Publish|Restore|Save|Sync|Unpublish|Update|Approve|Assert|Complete|Confirm|Deny|Disable|Enable|Install|Invoke|Register|Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|Unprotect|Use|ForEach|Sort|Tee|Where",")+(-)[\\w\\d]+")}]},PS_CLASS={className:"class",beginKeywords:"class enum",end:/\s*[{]/,excludeEnd:!0,relevance:0,contains:[hljs.TITLE_MODE]},PS_FUNCTION={className:"function",begin:/function\s+/,end:/\s*\{|$/,excludeEnd:!0,returnBegin:!0,relevance:0,contains:[{begin:"function",relevance:0,className:"keyword"},{className:"title",begin:/\w[\w\d]*((-)[\w\d]+)*/,relevance:0},{begin:/\(/,end:/\)/,className:"params",relevance:0,contains:[VAR]}]},PS_USING={begin:/using\s/,end:/$/,returnBegin:!0,contains:[QUOTE_STRING,APOS_STRING,{className:"keyword",begin:/(using|assembly|command|module|namespace|type)/}]},PS_ARGUMENTS={variants:[{className:"operator",begin:"(".concat("-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|-split|-wildcard|-xor",")\\b")},{className:"literal",begin:/(-)[\w\d]+/,relevance:0}]},PS_METHODS={className:"function",begin:/\[.*\]\s*[\w]+[ ]??\(/,end:/$/,returnBegin:!0,relevance:0,contains:[{className:"keyword",begin:"(".concat(KEYWORDS.keyword.toString().replace(/\s/g,"|"),")\\b"),endsParent:!0,relevance:0},hljs.inherit(hljs.TITLE_MODE,{endsParent:!0})]},GENTLEMANS_SET=[PS_METHODS,PS_COMMENT,BACKTICK_ESCAPE,hljs.NUMBER_MODE,QUOTE_STRING,APOS_STRING,CMDLETS,VAR,{className:"literal",begin:/\$(null|true|false)\b/},{className:"selector-tag",begin:/\@\B/,relevance:0}],PS_TYPE={begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0,relevance:0,contains:[].concat("self",GENTLEMANS_SET,{begin:"("+["string","char","byte","int","long","bool","decimal","single","double","DateTime","xml","array","hashtable","void"].join("|")+")",className:"built_in",relevance:0},{className:"type",begin:/[\.\w\d]+/,relevance:0})};return PS_METHODS.contains.unshift(PS_TYPE),{aliases:["ps","ps1"],lexemes:/-?[A-z\.\-]+/,case_insensitive:!0,keywords:KEYWORDS,contains:GENTLEMANS_SET.concat(PS_CLASS,PS_FUNCTION,PS_USING,PS_ARGUMENTS,PS_TYPE)}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_powershell.f399d49678cc40e51fde.bundle.js.map