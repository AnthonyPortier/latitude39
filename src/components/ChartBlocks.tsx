"use client";

import type { ReactNode } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  airdnaVilles,
  chambresRepartition,
  COLORS,
  construction133k,
  curistes,
  nuitesPaca,
  occupationCompare,
  scenariosCa,
  vinonMensuel,
} from "@/lib/chart-data";

function ChartTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-4">
      <h3 className="font-display text-lg text-verdon-900 md:text-xl">{title}</h3>
      {subtitle ? (
        <p className="mt-1 text-sm text-pierre-600">{subtitle}</p>
      ) : null}
    </div>
  );
}

function Panel({ children }: { children: ReactNode }) {
  return <div className="chart-panel my-8 not-prose">{children}</div>;
}

const euro = (value: number) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);

export function ChartNuitesPaca() {
  return (
    <Panel>
      <ChartTitle
        title="Nuitées plateformes — Provence-Alpes-Côte d’Azur"
        subtitle="Insee · millions de nuitées"
      />
      <div className="h-64 w-full md:h-72">
        <ResponsiveContainer>
          <LineChart data={nuitesPaca}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(68,60,53,0.12)" />
            <XAxis dataKey="annee" tick={{ fill: COLORS.ink, fontSize: 12 }} />
            <YAxis tick={{ fill: COLORS.ink, fontSize: 12 }} />
            <Tooltip contentStyle={{ borderRadius: 2, borderColor: "#d6cfc0" }} />
            <Line
              type="monotone"
              dataKey="millions"
              name="Millions"
              stroke={COLORS.verdonDeep}
              strokeWidth={3}
              dot={{ r: 5, fill: COLORS.soleil }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
}

export function ChartCuristes() {
  return (
    <Panel>
      <ChartTitle
        title="Curistes Gréoux"
        subtitle="Série médicalisés / conventionnés"
      />
      <div className="h-64 w-full md:h-72">
        <ResponsiveContainer>
          <BarChart data={curistes}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(68,60,53,0.12)" />
            <XAxis dataKey="annee" tick={{ fill: COLORS.ink, fontSize: 12 }} />
            <YAxis tick={{ fill: COLORS.ink, fontSize: 12 }} />
            <Tooltip contentStyle={{ borderRadius: 2, borderColor: "#d6cfc0" }} />
            <Bar dataKey="curistes" fill={COLORS.verdon} radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
}

export function ChartOccupationSaison() {
  return (
    <Panel>
      <ChartTitle
        title="Occupation mensuelle — marché vs T2 Vinon"
        subtitle="PriceLabs quartier Vinon / Gréoux · listing T2 2026"
      />
      <div className="h-72 w-full md:h-80">
        <ResponsiveContainer>
          <ComposedChart data={occupationCompare}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(68,60,53,0.12)" />
            <XAxis dataKey="mois" tick={{ fill: COLORS.ink, fontSize: 12 }} />
            <YAxis
              unit="%"
              tick={{ fill: COLORS.ink, fontSize: 12 }}
              domain={[0, 100]}
            />
            <Tooltip
              formatter={(value) => [`${value} %`, ""]}
              contentStyle={{ borderRadius: 2, borderColor: "#d6cfc0" }}
            />
            <Legend />
            <Bar dataKey="marche" name="Marché" fill={COLORS.pierre} />
            <Line
              type="monotone"
              dataKey="t2Vinon"
              name="T2 Vinon"
              stroke={COLORS.verdon}
              strokeWidth={2.5}
              dot={{ r: 3, fill: COLORS.verdon }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
}

export function ChartAirdna() {
  return (
    <div className="my-8 grid gap-6 not-prose lg:grid-cols-2">
      <div className="chart-panel">
        <ChartTitle
          title="AirDNA — chiffre d’affaires moyen"
          subtitle="Douze derniers mois · dollars US"
        />
        <div className="h-64 w-full">
          <ResponsiveContainer>
            <BarChart data={airdnaVilles} layout="vertical" margin={{ left: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(68,60,53,0.12)" />
              <XAxis type="number" tick={{ fill: COLORS.ink, fontSize: 12 }} />
              <YAxis
                type="category"
                dataKey="marche"
                width={78}
                tick={{ fill: COLORS.ink, fontSize: 12 }}
              />
              <Tooltip
                formatter={(value) => [
                  `$${Number(value).toLocaleString("en-US")}`,
                  "CA moyen",
                ]}
                contentStyle={{ borderRadius: 2, borderColor: "#d6cfc0" }}
              />
              <Bar dataKey="ca" fill={COLORS.olive} radius={[0, 2, 2, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="chart-panel">
        <ChartTitle
          title="AirDNA — occupation & prix / nuit"
          subtitle="Gréoux · Manosque · Vinon"
        />
        <div className="h-64 w-full">
          <ResponsiveContainer>
            <ComposedChart data={airdnaVilles}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(68,60,53,0.12)" />
              <XAxis dataKey="marche" tick={{ fill: COLORS.ink, fontSize: 12 }} />
              <YAxis
                yAxisId="left"
                unit="%"
                tick={{ fill: COLORS.ink, fontSize: 12 }}
                domain={[0, 100]}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fill: COLORS.ink, fontSize: 12 }}
              />
              <Tooltip contentStyle={{ borderRadius: 2, borderColor: "#d6cfc0" }} />
              <Legend />
              <Bar
                yAxisId="left"
                dataKey="occupation"
                name="Occupation %"
                fill={COLORS.verdon}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="adr"
                name="Prix / nuit $"
                stroke={COLORS.soleil}
                strokeWidth={2.5}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export function ChartVinonCa() {
  return (
    <Panel>
      <ChartTitle
        title="Chiffre d’affaires mensuel — T2 Vinon"
        subtitle="Revenue On The Books 2026 · total 16 360 € · prévision 18 257 €"
      />
      <div className="h-72 w-full md:h-80">
        <ResponsiveContainer>
          <BarChart data={vinonMensuel}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(68,60,53,0.12)" />
            <XAxis dataKey="mois" tick={{ fill: COLORS.ink, fontSize: 12 }} />
            <YAxis tick={{ fill: COLORS.ink, fontSize: 12 }} />
            <Tooltip
              formatter={(value) => [euro(Number(value)), "Revenu"]}
              contentStyle={{ borderRadius: 2, borderColor: "#d6cfc0" }}
            />
            <Bar
              dataKey="revenu"
              name="Revenu (€)"
              fill={COLORS.verdon}
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
}

export function ChartChambres() {
  return (
    <Panel>
      <ChartTitle
        title="Répartition des logements"
        subtitle="Cible SCI · 7 lots — 5 × T2 + 2 × T3"
      />
      <div className="h-64 w-full max-w-md mx-auto">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={chambresRepartition}
              dataKey="value"
              nameKey="name"
              innerRadius={55}
              outerRadius={90}
              paddingAngle={3}
              label
            >
              {chambresRepartition.map((entry) => (
                <Cell key={entry.name} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ borderRadius: 2, borderColor: "#d6cfc0" }} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
}

export function ChartConstruction133k() {
  return (
    <div className="my-8 grid gap-6 not-prose lg:grid-cols-2">
      <div className="chart-panel">
        <ChartTitle
          title="Construction cible 133 k€"
          subtitle="Scénario A — rappel business plan"
        />
        <div className="h-64 w-full">
          <ResponsiveContainer>
            <BarChart data={construction133k}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(68,60,53,0.12)" />
              <XAxis dataKey="poste" tick={{ fill: COLORS.ink, fontSize: 12 }} />
              <YAxis tick={{ fill: COLORS.ink, fontSize: 12 }} />
              <Tooltip
                formatter={(value) => [euro(Number(value)), "Montant"]}
                contentStyle={{ borderRadius: 2, borderColor: "#d6cfc0" }}
              />
              <Bar dataKey="montant" fill={COLORS.soleil} radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="chart-panel">
        <ChartTitle
          title="Scénarios de chiffre d’affaires"
          subtitle="A / A.1 rentables · A.2 non rentable → B"
        />
        <div className="h-64 w-full">
          <ResponsiveContainer>
            <BarChart data={scenariosCa}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(68,60,53,0.12)" />
              <XAxis dataKey="name" tick={{ fill: COLORS.ink, fontSize: 12 }} />
              <YAxis tick={{ fill: COLORS.ink, fontSize: 12 }} />
              <Tooltip
                formatter={(value) => [euro(Number(value)), "CA"]}
                contentStyle={{ borderRadius: 2, borderColor: "#d6cfc0" }}
              />
              <Bar
                dataKey="montant"
                fill={COLORS.oliveDeep}
                radius={[2, 2, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
