import { Block } from '@/components/Block';
import { MAIN_CONTENT } from '@/config';
import React from 'react';

export function Footer() {
    const form = `
  <html lang="ru">
    <body>
<script>!function(a,m,o,c,r,m){a[o+c]=a[o+c]||{setMeta:function(p){this.params=(this.params||[]).concat([p])}},a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1263726",hash:"3abdef53a822ddd00ca353f5398eea2e",locale:"ru"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");</script>
<script id="amoforms_script_1263726" async="async" charset="utf-8" src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1703804291"></script>    </body>
  </html>
`;

    const formTablet = `
  <html lang="ru">
    <body>
    <script>!function(a,m,o,c,r,m){a[o + c] = a[o + c] || {
        setMeta: function (p) {
            this.params = (this.params || []).concat([p])
        }
    },a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1264134",hash:"1f72d843db28ca150c9ab3c534b7fdf9",locale:"ru"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");</script>
    <script id="amoforms_script_1264134" async="async" charSet="utf-8"
            src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1703830343"></script>  </html>
`;

    const formMobile = `
  <html lang="ru">
    <body>
        <script>!function(a,m,o,c,r,m){a[o + c] = a[o + c] || {
            setMeta: function (p) {
                this.params = (this.params || []).concat([p])
            }
        },a[o+r]=a[o+r]||function(f){a[o+r].f=(a[o+r].f||[]).concat([f])},a[o+r]({id:"1262274",hash:"554d64165fe99cd47ba47b827c9350d7",locale:"ru"}),a[o+m]=a[o+m]||function(f,k){a[o+m].f=(a[o+m].f||[]).concat([[f,k]])}}(window,0,"amo_forms_","params","load","loaded");</script>
    <script id="amoforms_script_1262274" async="async" charSet="utf-8"
            src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1703829492"></script>
             </html>
`;
    return (
        <footer className="relative bg-dark py-[90px] z-50">
            <Block className="flex flex-col gap-4 2xl:gap-8">
                <div className="flex flex-col justify-between md:items-center gap-6 md:flex-row">
                    <div className="text-white font-light text-[26px] leading-1.1 [&>span]:font-semibold 2xl:text-[42px]">
                        {MAIN_CONTENT.footerTitle}
                    </div>
                    <div className="max-w-[400px] text-sm text-white font-light leading-none 2xl:text-xl md:text-end">
                        {MAIN_CONTENT.footerDescription}
                    </div>
                </div>
                <div
                    className="hidden 2xl:block relative [&>iframe]:!max-w-none [&>iframe]:!m-0"
                    dangerouslySetInnerHTML={{ __html: form }}
                />
                <div
                    className="hidden md:block 2xl:hidden relative [&>iframe]:!max-w-none [&>iframe]:!m-0"
                    dangerouslySetInnerHTML={{ __html: formTablet }}
                />
                <div
                    className="md:hidden relative [&>iframe]:!max-w-none [&>iframe]:!m-0"
                    dangerouslySetInnerHTML={{ __html: formMobile }}
                />
            </Block>
        </footer>
    );
}
