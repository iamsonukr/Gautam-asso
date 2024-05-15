import React from 'react';
import './countrySelect.css'

const countries = [
    { code: 'AF', name: 'Afghanistan', flag: 'https://flagcdn.com/w320/af.png' },
    { code: 'AL', name: 'Albania', flag: 'https://flagcdn.com/w320/al.png' },
    { code: 'DZ', name: 'Algeria', flag: 'https://flagcdn.com/w320/dz.png' },
    { code: 'AD', name: 'Andorra', flag: 'https://flagcdn.com/w320/ad.png' },
    { code: 'AO', name: 'Angola', flag: 'https://flagcdn.com/w320/ao.png' },
    { code: 'AI', name: 'Anguilla', flag: 'https://flagcdn.com/w320/ai.png' },
    { code: 'AQ', name: 'Antarctica', flag: 'https://flagcdn.com/w320/aq.png' },
    { code: 'AG', name: 'Antigua and Barbuda', flag: 'https://flagcdn.com/w320/ag.png' },
    { code: 'AR', name: 'Argentina', flag: 'https://flagcdn.com/w320/ar.png' },
    { code: 'AM', name: 'Armenia', flag: 'https://flagcdn.com/w320/am.png' },
    { code: 'AW', name: 'Aruba', flag: 'https://flagcdn.com/w320/aw.png' },
    { code: 'AU', name: 'Australia', flag: 'https://flagcdn.com/w320/au.png' },
    { code: 'AT', name: 'Austria', flag: 'https://flagcdn.com/w320/at.png' },
    { code: 'AZ', name: 'Azerbaijan', flag: 'https://flagcdn.com/w320/az.png' },
    { code: 'BS', name: 'Bahamas', flag: 'https://flagcdn.com/w320/bs.png' },
    { code: 'BH', name: 'Bahrain', flag: 'https://flagcdn.com/w320/bh.png' },
    { code: 'BD', name: 'Bangladesh', flag: 'https://flagcdn.com/w320/bd.png' },
    { code: 'BB', name: 'Barbados', flag: 'https://flagcdn.com/w320/bb.png' },
    { code: 'BY', name: 'Belarus', flag: 'https://flagcdn.com/w320/by.png' },
    { code: 'BE', name: 'Belgium', flag: 'https://flagcdn.com/w320/be.png' },
    { code: 'BZ', name: 'Belize', flag: 'https://flagcdn.com/w320/bz.png' },
    { code: 'BJ', name: 'Benin', flag: 'https://flagcdn.com/w320/bj.png' },
    { code: 'BM', name: 'Bermuda', flag: 'https://flagcdn.com/w320/bm.png' },
    { code: 'BT', name: 'Bhutan', flag: 'https://flagcdn.com/w320/bt.png' },
    { code: 'BO', name: 'Bolivia', flag: 'https://flagcdn.com/w320/bo.png' },
    { code: 'BA', name: 'Bosnia and Herzegovina', flag: 'https://flagcdn.com/w320/ba.png' },
    { code: 'BW', name: 'Botswana', flag: 'https://flagcdn.com/w320/bw.png' },
    { code: 'BV', name: 'Bouvet Island', flag: 'https://flagcdn.com/w320/bv.png' },
    { code: 'BR', name: 'Brazil', flag: 'https://flagcdn.com/w320/br.png' },
    { code: 'IO', name: 'British Indian Ocean Territory', flag: 'https://flagcdn.com/w320/io.png' },
    { code: 'BN', name: 'Brunei', flag: 'https://flagcdn.com/w320/bn.png' },
    { code: 'BG', name: 'Bulgaria', flag: 'https://flagcdn.com/w320/bg.png' },
    { code: 'BF', name: 'Burkina Faso', flag: 'https://flagcdn.com/w320/bf.png' },
    { code: 'BI', name: 'Burundi', flag: 'https://flagcdn.com/w320/bi.png' },
    { code: 'KH', name: 'Cambodia', flag: 'https://flagcdn.com/w320/kh.png' },
    { code: 'CM', name: 'Cameroon', flag: 'https://flagcdn.com/w320/cm.png' },
    { code: 'CA', name: 'Canada', flag: 'https://flagcdn.com/w320/ca.png' },
    { code: 'CV', name: 'Cape Verde', flag: 'https://flagcdn.com/w320/cv.png' },
    { code: 'KY', name: 'Cayman Islands', flag: 'https://flagcdn.com/w320/ky.png' },
    { code: 'CF', name: 'Central African Republic', flag: 'https://flagcdn.com/w320/cf.png' },
    { code: 'TD', name: 'Chad', flag: 'https://flagcdn.com/w320/td.png' },
    { code: 'CL', name: 'Chile', flag: 'https://flagcdn.com/w320/cl.png' },
    { code: 'CN', name: 'China', flag: 'https://flagcdn.com/w320/cn.png' },
    { code: 'CX', name: 'Christmas Island', flag: 'https://flagcdn.com/w320/cx.png' },
    { code: 'CC', name: 'Cocos (Keeling) Islands', flag: 'https://flagcdn.com/w320/cc.png' },
    { code: 'CO', name: 'Colombia', flag: 'https://flagcdn.com/w320/co.png' },
    { code: 'KM', name: 'Comoros', flag: 'https://flagcdn.com/w320/km.png' },
    { code: 'CG', name: 'Congo', flag: 'https://flagcdn.com/w320/cg.png' },
    { code: 'CD', name: 'Congo, The Democratic Republic of the', flag: 'https://flagcdn.com/w320/cd.png' },
    { code: 'CK', name: 'Cook Islands', flag: 'https://flagcdn.com/w320/ck.png' },
    { code: 'CR', name: 'Costa Rica', flag: 'https://flagcdn.com/w320/cr.png' },
    { code: 'CI', name: 'Cote D\'Ivoire', flag: 'https://flagcdn.com/w320/ci.png' },
    { code: 'HR', name: 'Croatia', flag: 'https://flagcdn.com/w320/hr.png' },
    { code: 'CU', name: 'Cuba', flag: 'https://flagcdn.com/w320/cu.png' },
    { code: 'CY', name: 'Cyprus', flag: 'https://flagcdn.com/w320/cy.png' }
]

const CountryDropdown = () => {
    return (
        <div className="selectionBox">
            <select className="selectBtn custom-txt">
                <option value="" disabled>Select a country</option>
                {countries.map(country => (
                    <option key={country.code} value={country.code}>
                        <img className="h-8 w-auto mr-2" src={country.flag} alt={country.name} /> {country.name}
                    </option>
                ))}
            </select>
        </div>
    );
};


export default CountryDropdown;
