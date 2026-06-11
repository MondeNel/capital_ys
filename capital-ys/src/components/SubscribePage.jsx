import { FiCheck, FiX } from 'react-icons/fi';

const SubscribePage = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="text-[#185FA5] text-xs font-semibold tracking-wide mb-1">Plans</div>
    <h2 className="text-xl font-medium text-gray-900 mb-1">Choose how you access Capital Ys</h2>
    <p className="text-gray-600 text-sm mb-6">All subscriptions are subject to terms and conditions.</p>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Basic */}
      <div className="border border-gray-200 rounded-lg p-5">
        <div className="inline-block text-xs px-3 py-1 rounded-md mb-3 bg-[#E6F1FB] text-[#0C447C]">Basic</div>
        <div className="font-medium text-gray-900 mt-1">Free</div>
        <div className="text-2xl font-medium text-[#185FA5] mt-1">R0 <span className="text-xs text-gray-500 font-normal">/ month</span></div>
        <ul className="mt-4 space-y-1 text-sm text-gray-600">
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> Newsletter access</li>
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> View home page</li>
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> Ask questions</li>
          <li className="flex items-center gap-1"><FiX className="text-[#E24B4A]" /> No funding page</li>
          <li className="flex items-center gap-1"><FiX className="text-[#E24B4A]" /> No commenting</li>
        </ul>
        <button className="w-full mt-5 py-2 rounded-md text-sm font-medium border border-[#185FA5] text-[#185FA5] bg-transparent">Get started</button>
      </div>
      {/* Advanced */}
      <div className="border-2 border-[#185FA5] rounded-lg p-5">
        <div className="flex items-center gap-2">
          <div className="inline-block text-xs px-3 py-1 rounded-md mb-3 bg-[#EAF3DE] text-[#27500A]">Advanced</div>
          <span className="text-xs bg-[#E6F1FB] text-[#0C447C] px-2 py-1 rounded-md mb-3">Most popular</span>
        </div>
        <div className="font-medium text-gray-900 mt-1">Advanced</div>
        <div className="text-2xl font-medium text-[#185FA5] mt-1">Contact us <span className="text-xs text-gray-500 font-normal">for pricing</span></div>
        <ul className="mt-4 space-y-1 text-sm text-gray-600">
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> All basic features</li>
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> Funding page access</li>
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> Comment on reviews</li>
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> Advertise products</li>
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> Limited expert access</li>
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> Business trainings</li>
        </ul>
        <button className="w-full mt-5 py-2 rounded-md text-sm font-medium bg-[#185FA5] text-white">Upgrade</button>
      </div>
      {/* Premium */}
      <div className="border border-gray-200 rounded-lg p-5">
        <div className="inline-block text-xs px-3 py-1 rounded-md mb-3 bg-[#EEEDFE] text-[#3C3489]">Premium</div>
        <div className="font-medium text-gray-900 mt-1">Premium</div>
        <div className="text-2xl font-medium text-[#185FA5] mt-1">Contact us <span className="text-xs text-gray-500 font-normal">for pricing</span></div>
        <ul className="mt-4 space-y-1 text-sm text-gray-600">
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> All advanced features</li>
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> Auto-qualify for funding</li>
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> Unlimited expert access</li>
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> Free business training</li>
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> Unlimited all services</li>
        </ul>
        <button className="w-full mt-5 py-2 rounded-md text-sm font-medium bg-[#534AB7] text-white">Go premium</button>
      </div>
      {/* Once-off */}
      <div className="border border-gray-200 rounded-lg p-5">
        <div className="inline-block text-xs px-3 py-1 rounded-md mb-3 bg-[#F1EFE8] text-[#444441]">Once-off</div>
        <div className="font-medium text-gray-900 mt-1">Once-off</div>
        <div className="text-2xl font-medium text-[#185FA5] mt-1">Per service <span className="text-xs text-gray-500 font-normal">pricing</span></div>
        <ul className="mt-4 space-y-1 text-sm text-gray-600">
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> All basic services</li>
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> Pay per service used</li>
          <li className="flex items-center gap-1"><FiCheck className="text-[#1D9E75]" /> No commitment</li>
        </ul>
        <button className="w-full mt-5 py-2 rounded-md text-sm font-medium border border-[#185FA5] text-[#185FA5] bg-transparent">Buy service</button>
      </div>
    </div>
    <p className="text-xs text-gray-500 mt-4"><button className="text-[#185FA5]" onClick={() => alert("Terms and conditions would appear here.")}>Terms and conditions</button> apply to all subscriptions.</p>
  </div>
);

export default SubscribePage;