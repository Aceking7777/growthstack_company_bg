/** @odoo-module **/

import { session } from "@web/session";
import { patch } from "@web/core/utils/patch";
import { WebClient } from "@web/webclient/webclient";
import { useEffect } from "@odoo/owl";

patch(WebClient.prototype, {
    setup() {
        super.setup(...arguments);
        useEffect(() => {
            this._applyCompanyBackground();
        });
    },

    async _applyCompanyBackground() {
        const companyId = session.user_companies?.current_company;
        if (!companyId) return;

        const result = await this.env.services.orm.read(
            "res.company",
            [companyId],
            ["background_image", "background_color", "background_opacity"]
        );

        if (!result || !result.length) return;

        const { background_image, background_color, background_opacity } = result[0];
        const el = document.querySelector(".o_web_client") || document.body;

        if (background_image) {
            el.style.backgroundImage = `url(data:image/png;base64,${background_image})`;
            el.style.backgroundSize = "cover";
            el.style.backgroundPosition = "center";
            el.style.backgroundAttachment = "fixed";
            el.style.backgroundColor = "";
        } else if (background_color && background_color !== "#FFFFFF") {
            el.style.backgroundImage = "";
            el.style.backgroundColor = background_color;
        } else {
            el.style.backgroundImage = "";
            el.style.backgroundColor = "";
        }

        el.style.opacity = background_opacity || 1;
    },
});
