<template>
    <div>
        <h1>Language: {{language}}</h1>
        <strong>@highlightjs/vue-plugin</strong>
        <highlightjs language="javascript" :code="code" />
        <strong>hljs native</strong>
        <pre><code v-html="hljsCode"></code></pre>
    </div>
</template>


<script>
import { defineComponent } from "vue"
import hljsVuePlugin from "@highlightjs/vue-plugin"
import hljs from "highlight.js/lib/core"

export default defineComponent ({ 
    name: "homePage",
    data() {
        return {
            language: "typescript",
            code:`
const Code: Block = {
    slug: "code", // required
    imageURL: "/images/block-thumbnail.png",
    fields: [
        {
            name: "size",
            label: "Block size",
            type: "number",
            min: 1,
            required: true,
            admin: {
                "width": "128px"
            },
        },
        {
            name: "title",
            type: "text",
            required: true,
        },
        {
            name: "link",
            label: "Link",
            type: "text",
            admin: {
                placeholder: "/link-to-page"
            },
            required: false,
        },
        {
            name: "code",
            label: "Code",
            type: "code",
            required: true,
        },
    ],
}`}
    },
    computed: {
        hljsCode() {
            return hljs.highlight(this.code, {language: this.language}).value
        }
    
    },
    components: { 
        highlightjs: hljsVuePlugin.component
    },
})

</script>