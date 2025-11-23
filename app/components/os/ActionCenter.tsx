import { Battery, Bluetooth, FileText, LucideIcon, Monitor, Moon, Plane, Sun, Terminal, Wifi } from "lucide-react";

const QuickAction = ({ icon: Icon, label, active = false }: { icon: LucideIcon, label: string, active?: boolean }) => (
    <div className={`flex flex-col items-center justify-center p-2 rounded cursor-pointer transition ${active ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>
        <Icon size={18} className="mb-1" />
        <span className="text-[10px]">{label}</span>
    </div>
);

const ActionCenter: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            className="absolute top-0 right-0 bottom-12 w-80 bg-[#1a1a1a]/95 backdrop-blur-xl border-l border-gray-700 shadow-2xl z-4000 flex flex-col animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
        >
            {/* Notifications Area */}
            <div className="flex-1 overflow-y-auto p-4">
                <div className="flex justify-between items-end mb-4">
                    <span className="text-xs font-bold text-white uppercase tracking-wider ml-1">Manage notifications</span>
                    <span className="text-xs text-gray-400 hover:text-white cursor-pointer transition" onClick={onClose}>Clear all</span>
                </div>

                <div className="space-y-2">
                    {/* Instruction Card 1 */}
                    <div className="bg-white/10 hover:bg-white/15 transition p-3 rounded-md cursor-default border border-white/5">
                        <div className="flex items-start gap-3">
                            <div className="bg-blue-600 p-1.5 rounded">
                                <Monitor size={16} className="text-white" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white mb-1">Welcome to Portfolio OS</h4>
                                <p className="text-xs text-gray-300 leading-relaxed">
                                    This interactive portfolio mimics a Windows environment. Use the start menu or desktop icons to navigate.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Instruction Card 2 - Shortcuts */}
                    <div className="bg-white/10 hover:bg-white/15 transition p-3 rounded-md cursor-default border border-white/5">
                        <div className="flex items-start gap-3">
                            <div className="bg-green-600 p-1.5 rounded">
                                <Terminal size={16} className="text-white" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white mb-1">Shortcuts</h4>
                                <ul className="text-xs text-gray-300 space-y-1.5 mt-1">
                                    <li className="flex items-center gap-2">
                                        <span className="bg-gray-700 px-1.5 py-0.5 rounded border border-gray-600 font-mono">Ctrl</span>
                                        +
                                        <span className="bg-gray-700 px-1.5 py-0.5 rounded border border-gray-600 font-mono">Win</span>
                                        Toggle Start Menu
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="bg-gray-700 px-1.5 py-0.5 rounded border border-gray-600 font-mono">/</span>
                                        Quick Search
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="bg-gray-700 px-1.5 py-0.5 rounded border border-gray-600 font-mono">Right Click</span>
                                        Context Menu
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Instruction Card 3 - PDF */}
                    <div className="bg-white/10 hover:bg-white/15 transition p-3 rounded-md cursor-default border border-white/5">
                        <div className="flex items-start gap-3">
                            <div className="bg-red-600 p-1.5 rounded">
                                <FileText size={16} className="text-white" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white mb-1">Resume Available</h4>
                                <p className="text-xs text-gray-300 leading-relaxed">
                                    The resume app loads a real PDF. You can download or print it directly from the viewer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions Area (Bottom) */}
            <div className="p-4 border-t border-gray-700 bg-[#1f1f1f]/50">
                <div className="grid grid-cols-4 gap-2">
                    <QuickAction icon={Wifi} label="Network" active={true} />
                    <QuickAction icon={Bluetooth} label="Bluetooth" />
                    <QuickAction icon={Plane} label="Airplane" />
                    <QuickAction icon={Moon} label="Night Light" />
                    <QuickAction icon={Sun} label="Brightness" active={true} />
                    <QuickAction icon={Battery} label="Saver" />
                </div>
            </div>
        </div >
    );
};

export default ActionCenter